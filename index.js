require('dotenv').config();
const Users = require('./models/Users');
require('./router');

// const espnFF = require('espn-ff-api');
// const importantVariables = require('./config')();





// ==========================
          // CREATE
//===========================
  
// Creates and adds single user database
// Users.addUser('Sam Hunter', '67dd866')
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

// Retrieves all users
// Users.getAllUsers()
//     .then(allUsers => {
//         console.log(allUsers);
//     })

// Users.getUserByUsername('stardust')
//     .then(username => {
//         console.log(username);
//     })

// Retrieves user by id
// Users.getUserById(2)
//     .then(user => {
//         console.log(user);
//     })

// Retrieve team name
// Users.getTeamById(1)
//     .then(teamName => {
//         console.log(teamName.toUpperCase());
//     })

// Retrieve Team Players
// Users.getTeamById(2)
//     .then(teamName => {
       
//     })

// Get all team players 
// Users.getAllPlayers(1)
//     .then(result => {
//         console.log(result);
//     })


// ==========================
          // UPDATE
//===========================
// Updates user by id
// Users.getUserById(77)
//     .then(instance => {
//         instance.updateUsernameById('Alex')
//         .then(result => {
//             console.log(result)
//         })
//     })
//     .catch(err => {
//         console.log('Error. Please choose a valid id number');
//     })


// ==========================
          // DELETE
//===========================

// Deletes the user by id
// Users.deleteUserById(4)
//     .then(rowCount => {
//         console.log(`${rowCount} affected`);
//     })


// ==============================
//          POSTS DATA
// ==============================
// Create new post

// Users.newBlog('blogtitle', 'blogbody', 6)
//     .then(result => {
//         console.log(result);
    // })


// Gets all blogs from a user
// Users.getUserById(2)
//     .then(user => {
//         user.getAllUsersBlogs(user.id)
//             .then( result => {
//                 console.log('Here is a list of your recent blogs.');
//                 console.log('------------------------------------');
//                 result.forEach(format => {
//                     console.log(format);
//                 })
//             }
//         )
//     })
    