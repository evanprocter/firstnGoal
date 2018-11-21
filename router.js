const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Users = require('./models/Users');
const base = require('./views/base');
const home = require('./views/home');
const login = require('./views/login');
const register = require('./views/register');
const profile = require('./views/profile');
const edit = require('./views/edit_profile');
const seeBlog = require('./views/seeBlog');
const newBlog = require('./views/newBlog');
const db = require('./models/db');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'demePollosAsadosYArrozBlanco',
    saveUninitialized: false
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// function protectRoute(req, res, next) {
//   const loggedIn = (req.session.user) ? true : false;
//   if (loggedIn) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// }

// Home page
app.get('/', (req, res) => {
  res.send(base(home()));
});

// Setting up login page
app.get('/login', (req, res) => {
//   // something here
  res.send(base(login()));
});

// Validating login information from form field
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
    Users.getUserByUsername(username)
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
        .then(user => {
          console.log(user);
            if (user.passwordDoesMatch(password)) {
                req.session.user = user;
                res.redirect(`/profile/${req.session.user.id}`);
            } else {
                res.redirect('/login');
            }
        })
  
  // res.send(req.body);
  
});

// app.post('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('/');
// });

// // Setting up registration page
app.get('/register', (req, res) => {
  // something here
  res.send(base(register()));
});

// // Creating user from form field
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //Method call
  Users.addUser(username, password)
    .catch(() => {
      res.redirect('/register');
      })
    .then(newUser => {
      req.session.user = newUser;
      const idValue = req.session.user.id;
      console.log(req.session.user);
      console.log(idValue);

      res.redirect(`/profile/${idValue}`);
    })
  // something here
});

// Testing
// app.get('/profile', (req, res) => {
//   const user = req.params.id;
//   // something here
//   res.send(base(profile(user)));
// });

// // Showing user profile, protected
app.get('/profile/:id(\\d+)', (req, res) => {
  const user = req.params.id;
  // something here
  res.send(base(profile(user)));
});

// // Editing user information, protected
app.get('/edit/:id(\\d+)', (req, res) => {
  const user = req.params.id;
  const newlyEdit = edit(user);
  res.send(base(newlyEdit));
});

// // Updating user information, protected
app.post('/edit/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const username = req.body["new-username"];
  Users.getUserById(id)
    .then(result => {
      // console.log(result);
      result.updateUsernameById(result.username)
        .then(result => {
          console.log(result);
        })
    })
  
  res.redirect(`/profile/${id}`)
});

// // Going to a specific blog page - (add protected)
app.get('/blog/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(base(seeBlog));
  // something here
});

app.get('/blog/new/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(base(newBlog(id)));
});

// // Creating a new blog page
app.post('/blog/new/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  const blogTitle = req.body.blogTitle;
  const blogBody = req.body.blogBody;
  Users.newBlog(blogTitle, blogBody, id)
    .then(result => {
      console.log(`Updated and the id of your post is ${result.id}`);
    })

});

app.listen(3000, () => {
  console.log('Your express app is ready');
});
