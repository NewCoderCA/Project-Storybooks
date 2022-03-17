const { response } = require('express');
const express = require('express');
const passport = require('passport');
const router = express.Router();


//Authentication with Google GET /auth/google
router.get('/google', passport.authenticate('google', { 
    scope: ['profile'] 
}));

//Google authentication callback GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), 
    (request, response) => {
    response.redirect('/main')
 });

 //Logout GET /auth/logout
 router.get('/logout', (request, response) => {
     request.logout();
     response.redirect('/')
 });

 module.exports = router;
