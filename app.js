const express = require("express");
const dotenv = require("dotenv");
const dotenvcon = require("dotenv").config();
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
const path = require("path");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDbStore = require("connect-mongo");

//Load configuration file
dotenv.config({ path: "./config/config.env" });

//Passport configuration
require("./config/passport")(passport);

//Database connection
connectDB();

//Server APP
const app = express();

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Method override forms
app.use(
  methodOverride(function (request, response) {
    if (
      request.body &&
      typeof request.body === "object" &&
      "_method" in request.body
    ) {
      let method = request.body._method;
      delete request.body._method;
      return method;
    }
  })
);

//Express Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon } = require("./helpers/hbs");

//Express Handlebars middleware
app.engine(
  ".hbs",
  exphbs.engine({
    helpers: { formatDate, stripTags, truncate, editIcon },
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

//Sessions Middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

//Passport Strategy Middleware
app.use(passport.initialize());
app.use(passport.session());


//Static - absolute path to public
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

const PORT = process.env.PORT || 3000;

//APP Listen
app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
