const passport = require('passport');
const passportService = require('./passport');
const authenticationController = require('../controllers/authentication_controller');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

const router = require('express').Router();

// Auth Routes ------------------------------------------------------
router.route('/signup')
    .post(authenticationController.signup);
router
    .route('/signin')
    .post([requireLogin, authenticationController.signIn]);

// XXX Routes ------------------------------------------------------ function
// protected(req, res, next) {     console.log('dfffff');     res.send("here's
// the secret!"); } router     .route('/protected')     .get(requireAuth,
// protected);

module.exports = router;