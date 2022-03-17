# Project-Storybooks 
This is a CRUD application (Create, Read, Update, Delete) using server side Node.js, Express, MongoDB Atlas Cloud and Google Authorisation :smiley:

## Create and Initialise Repository

- Create new repo in GitHub
- Git clone `https:` code
- Navigate `ls` and `cd` on desktop where to paste repo in Terminal
- `code .` to open in VS

### Its connected! :tada: Send initial commit

- `touch [name of file].js` create content file in Terminal
- `git status` check content file is added
- `git add .` add all content file
- `git commit -m "[insert message]"` insert first commit message
- `git branch -M main`
- `git remote add origin [https://github.com/repo address]`
- `git push -u origin main`
- Refresh GitHub page - Its there! :smiley:

## Install dependancies :computer: :paperclips:

- `npm init -y`
- `node.js` install or check version `node -v`
- `npm i express` and `npm i express-session` install for web framework routes (middleware) and cookies
- `npm i express mongoose connect-mongo` install for database and sessions database so we do not get logged out when we reset the server
- `npm i express-handlebars` install for template engine instead of EJS
- `npm i dotenv` install for environment variables in config
- `npm i method-override` install to allow override on PUT and DELETE requests from the templates
- `npm i moment` install to format dates
- `npm i morgan ` install for dev requests to pages shows in console
- `npm i passport` and `npm i passport-google-oauth20` install for authentication

## Install dev dependancies :computer: :paperclips:

- `npm i -D nodemon` install to continuously watch server and make changes automatically
- `npm i cross-env` install for global variables to work on different operating systems

## Connect database MongoDB Atlas :cloud: version

- Sign up or login in `https://www.mongodb.com/`
- Create new cluster, Database Access and Network Access
- Navigate to `Database Deployment` click connect
- Add MongoDB `Connect to application` string in your application code in`config.env` file

## Include CSS stylesheet :crayon:

- Copy stylesheet from `https://materializecss.com/`for partial and full .hbs-views
- Copy stylesheet from `https://cdnjs.com/` version 5.12.0
- Insert stylesheet ckeditor Javascript from `https://www.cdnjs.com` in script tags to amend text using `wysiwyg`

## Set up create Google API Key :closed_lock_with_key:

- Sign up or login in `https://console.cloud.google.com/`
- Create new Project or click on existing one
- Click APIs and Services - Enable APIs and Services
- Click Google+ API - Enable
- Create Credentials - Create OAuth Client ID
- App type Web App
- Insert your redirect URIs `http://localhost:[number]/auth/google/callback` but you will have to update once hosted
- OAuth generated `Client ID` and `Client Secret` to be stored in `config.env` file
  - You may need to add `.trim()` on your googleStrategy in your passport.js to remove any new lines or extra spaces
  - You may need to add `Authorised redirect URIs` under Credentials when deploying with Heroku
  - You may need to change `Publishing status` to `Testing` when deploying to Heroku
- Start browser `npm run dev` :running_woman:

## Create Passport.js strategy :stopwatch: :cookie:

- `https://www.passportjs.org/packages/passport-google-oauth20/`
- Include serialise user and deserialise user method codes for the passport.js file from the `Sessions` section on `https://www.passportjs.org` to support and indentify the login sessions with a unique cookie
- Include passport.authenticate method from `Authenticate Requests` with scope for profile data

## Cypress E2E Testing :white_check_mark:

- `cd /into/your/projectpath` and `ls` to list where you are
- `npm install cypress --save-dev`Install Cypress locally as a dev dependancy for your project
- `./node_modules/.bin/cypress open` Cypress will open in browser
- Run example test to check it works
- Create test file in cypress/integration file

## Deploy app to Heroku :rocket:

- Sign up or Login in `https://www.heroku.com/home`
- New, Create new app, Connect to GitHub as deployment method
- Connect to GitHub and search for GitHub app, then `connect`
- Set automatic or manual deployment and then `deploy branch`
- Ensure `Procfile` is created in root folder and include `web:node [name of server file].js`
