require('dotenv').config();


const Users = require('./models/Users');
// const april = Users.addUser('Aprill', '87654');

// ==========================
          // CREATE
//===========================
  
// Creates and adds single user database
// Users.addUser('Sam', '678')
//     .then(santa => {
//         // console.log(santa);
//         santa.getPassword()
//             .then(password => {
//                 console.log(password.phash);
//             })

//     })

// ==========================
          // RETRIEVE
//===========================

Retrieves all users
Users.getAllUsers()
    .then(allUsers => {
        console.log(allUsers);
    })
