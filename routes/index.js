const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const Story = require('../models/Story');


//Login page GET
router.get('/', ensureGuest, (request, response) => {
    response.render('loginpage', {
        layout: 'login',
    });
})

//Main page logged user - views stories GET
router.get('/main', ensureAuth, async (request, response) => {
    try {
        const stories = await Story.find({ user: request.user.id }).lean();
        response.render('mainpage', {
            name: request.user.firstName,
            stories
        });
    }   catch (error) {
        console.error(error);
        response.render('error/500');
    }
})



module.exports = router;