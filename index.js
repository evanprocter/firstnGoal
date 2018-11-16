require('dotenv').config();
const Users = require('./models/Users');
// const espnFF = require('espn-ff-api');
// const importantVariables = require('./config')();



// console.log(config);
// console.log(im.SWID);

// const cookies = {
//     espnS2: importantVariables.espnS2,
//     SWID: importantVariables.SWID,
// };



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
Users.getAllUsers()
    .then(allUsers => {
        console.log(allUsers);
    })

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
    