const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


class Users {

    constructor(id, username, phash, logo=false) {

        this.id = id;
        this.username = username;
        this.phash = phash; // Hashed password version
    
        // Checks if user has logo else defaults to null
        if (logo) {
            this.logo = logo;
        }
    }

    // ==========================
             // CREATE
    //===========================
    
    // Adds single user to database
    static addUser(username, password, logo) {
        
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash + "HI HOW THERE YEAH!!!!");



        return db.one(`insert into users 
                            (username, phash, logo) 
                        values ($1, $2, $3) 
                            returning id
                            `, [username, hash, logo])
                            .then(data => {
                                const person = new Users(data.id, username, hash, logo);
                                return person;
                            })
                            
    }

    // ==========================
            // Retrieve
    //===========================
 
    // Retrieve all users
     static getAllUsers() {
        return db.any(`select * from users`)
        .then(allUsers => {
            const instanceArray = allUsers.map(user => {
                const instance = new Users(user.id, user.username, user.phash);
                return instance;
            });
            return instanceArray;
        })
    }

    // Get User By Password
    static getPassword() {
        return db.one(`select * from users where phash = $1`, [this.phash])
            .then(password => {
                return password;
            })
    }

    // Get user by id 
    static getUserById(id) {
        return db.one(`select * from users where id = $1`, [id])
            .then(user => {
                const instance = new Users(user.id, user.username, user.phash);
                return instance;
            })

    }
    
    // Retrieves a single user
    static getUserByUsername(username) {
        return db.one(`select * from users where username ilike '%$1:raw%'`, [username])
            .then(result => {
                const instance = new Users(result.id, result.username, result.phash);
                return instance;
            })
    }


    // Get all users team players
    static getTeamById(id) {
        return db.any(`select * from users inner join teams on users.teamid = teams.id where users.id = $1`, [id])
        .then(allUsers => {
            return allUsers[0].name;
        })
    }
    

    // Retrieve all players
    static getAllPlayers(id) {
            return db.any(`select * from users inner join teams on users.teamid = teams.id inner join players on players.teamid = teams.id where teams.id = $1`, [id])
        .then(result => {
            // console.log(result);
            const playerInfo = result.map( single => {
                return [single.name, single.position, single.health];
            })
            return playerInfo;
        })
    }

    // Retrieves and compares passwords
    passwordDoesMatch(password) {
        console.log(password);
        console.log(this.phash);
        const didMatch = bcrypt.compareSync(password, this.phash);
        console.log(didMatch);
        return didMatch;
        
        // return didMatch;
    }
        
    
    // ==========================
            // Update
    //===========================

    // Updates username
    updateUsernameById(username) {
        console.log(username);
        return db.result(`update users set username=$2 where id=$1`, [this.id, username])
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('User has been updated');
                } else{
                    console.log('User has not been updated');
                }
                return result.rowCount;
            })
    }

    // ==========================
            // Delete
    //===========================
    static deleteUserById(id) {
        return db.result(`delete from users where id = $1`, [id])
        .then(result => {
            if (result.rowCount === 1) {
                console.log('User has been deleted');
            } else {
                console.log('User has not been deleted');
            }
            return result.rowCount;
        })
    }

// ==============================
//          POSTS DATA
// ==============================
// Create post

static newBlog(blogTitle, blogBody, blogid) {
    return db.one(`insert into blogs 
    (title, body, userid) 
values ($1, $2, $3) 
    returning id
    `, [blogTitle, blogBody, blogid])
}




// Retrieve
    getAllUsersBlogs(id) {
        return db.any('select * from blogs where userid = $1 order by blogtime desc', [id])
            .then(result => {
                const arrOfBlogs = result.map( blog => {
                    return (`Title: ${blog.title} Body: ${blog.body}`);
                })
                return arrOfBlogs;
                })
    }
}



module.exports = Users;