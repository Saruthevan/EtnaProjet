const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const InstagramStrategy = require('passport-instagram').Strategy;

const app = express();
const PORT = 3000;

// Set views and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Logging middleware using morgan
app.use(morgan('combined'));

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


// Initialize Passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport session setup
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Passport setup and strategy configuration
passport.use(new InstagramStrategy({
  clientID: 'INSTAGRAM_CLIENT_ID',
  clientSecret: 'INSTAGRAM_CLIENT_SECRET',
  callbackURL: 'https://localhost:3000/auth/instagram/callback'
},
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }));

// Router and static files
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function (req, res) {
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user });
});

app.get('/login', function (req, res) {
  res.render('login', { user: req.user });
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// GET /auth/instagram
app.get('/auth/instagram',
  passport.authenticate('instagram'));

// GET /auth/instagram/callback
app.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  (req, res) => {
    // Access the username from the authenticated user's profile
    const username = req.user.username;
    console.log(username);
    // Log the username to the console
    console.log('Authenticated user username:', username);

    // Redirect or render the appropriate page
    res.redirect('/');
  });

// Simple route middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
