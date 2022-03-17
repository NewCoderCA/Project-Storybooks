const { response } = require("express");
const express = require("express");
const ResponseLike = require("responselike");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Story = require("../models/Story");

//Show Add Stories page logged user GET
router.get("/add", ensureAuth, (request, response) => {
  response.render("stories/add");
});

//Process Add Stories Form logged user POST
router.post("/", ensureAuth, async (request, response) => {
  try {
    request.body.user = request.user.id;
    await Story.create(request.body);
    response.redirect("/main");
  } catch (error) {
    console.error(error);
    response.render("error/500");
  }
});

//Show all stories GET
router.get("/", ensureAuth, async (request, response) => {
  try {
    const stories = await Story.find({ status: "public" })
      .populate("user")
      .sort({ created: "desc" })
      .lean();
    response.render("stories/index", { stories });
  } catch (error) {
    console.log(error);
    response.render("error/500");
  }
});

//Show one single story GET
router.get("/:id", ensureAuth, async (request, response) => {
  try {
    let story = await Story.findById(request.params.id).populate("user").lean();

    if (!story) {
      return response.render("error/404");
    }
    response.render("stories/show", {
      story,
    });
  } catch (error) {
    console.log(error);
    response.render("error/404");
  }
});

//Username link shows story GET
router.get("/user/:userId", ensureAuth, async (request, response) => {
  try {
    const stories = await Story.find({
      user: request.params.userId,
      status: "public",
    })
      .populate("user")
      .lean();
    response.render("stories/index", {
      stories,
    });
  } catch (error) {
    console.log(error);
    response.render("error/404");
  }
});

//Edit stories page logged user GET
router.get("/edit/:id", ensureAuth, async (request, response) => {
  try {
    const story = await Story.findOne({ _id: request.params.id }).lean();

    if (!story) {
      return response.render("error/404");
    }
    if (story.user != request.user.id) {
      response.redirect("/stories");
    } else {
      response.render("stories/edit", {
        story,
      });
    }
  } catch (error) {
    console.log(error);
    response.render("error/500");
  }
});

//Method override edit stories page logged user PUT
router.put("/:id", ensureAuth, async (request, response) => {
  try {
    let story = await Story.findById(request.params.id).lean();

    if (!story) {
      return response.render("error/404");
    }
    if (story.user != request.user.id) {
      response.redirect("/stories");
    } else {
      story = await Story.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        {
          new: true,
          runValidators: true,
        }
      );
      response.redirect("/main");
    }
  } catch (error) {
    console.log(error);
    response.render("error/500");
  }
});

//Delete story logged user DELETE
router.get("/:id", ensureAuth, async (request, response) => {
  try {
    let story = await Story.findById(request.params.id).lean();

    if (!story) {
      return response.render("error/404");
    }

    if (story.user != request.user.id) {
      response.redirect("/stories");
    } else {
      await Story.remove({ _id: request.params.id });
      response.redirect("/main");
    }
  } catch (error) {
    console.log(error);
    response.render("error/500");
  }
});

module.exports = router;
