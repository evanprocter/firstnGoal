const db = require('./db');

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
    static addUser(username, phash, logo) {
        return db.one(`insert into users 
                            (username, phash, logo) 
                        values ($1, $2, $3) 
                            returning id
                            `, [username, phash, logo])
                            .then(data => {
                                const person = new Users(data.id, username, phash, logo);
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
    getPassword() {
        return db.one(`select * from users where phash = $1`, [this.phash])
            .then(password => {
                return password;
            })
    }
    
    // Retrieves a single user
    // getUserByName() {
    //     return db.one(`select * from users where username ilike '%$1:raw%'`, [this.username]);
    // }

    // Retrieve team name
    getTeamName() {
        // Come back to
    }


    // ==========================
            // Update
    //===========================

    // Updates username
    updateUsername() {
        // Come back to
    }

    // ==========================
            // Delete
    //===========================
    static deleteUser() {
        // Come back to
    }

}

module.exports = Users;