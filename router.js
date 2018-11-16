const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'demePollosAsadosYArrozBlanco',
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

function protectRoute(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Home page
app.get('/', (req, res) => {
  // something here
  res.send(home);
});

// Setting up login page
app.get('/login', (req, res) => {
  // something here
  res.send(base(login));
});

// Validating login information from form field
app.post('/login', (req, res) => {
  const verify = req.body.//property here
  // something here
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

// Setting up registration page
app.get('/register', (req, res) => {
  // something here
  res.send(base(register));
});

// Creating user from form field
app.post('/register', (req, res) => {
  const newUser = req.body.//property here;
  //Method call
  res.send(newUser);
  // something here
});

// Showing user profile, protected
app.get('/profile/:id(\\d+)', protectRoute, (req, res) => {
  const user = req.params.id;
  // something here
  res.send(base(profile));
});

// Editing user information, protected
app.get('/edit/:id(\\d+)', protectRoute, (req, res) => {
  const user = req.params.id;
  // something here
  res.send(base(edit));
});

// Updating user information, protected
app.post('/edit/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  const newName = req.body.//property here
  // something here
});
