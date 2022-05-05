import db from '../models/dbModel.js'

const userController = {}

userController.createUser = async function (req, res, next) {
    // need separate MW for checking if it already exists?
    // add hashing with bcrypt?
    try{
        const {username, password} = req.body
        // need to auto-generate the new user_id
        const qString = `INSERT INTO users VALUES ('${username}', '${password}');`
        const results = await db.query(qString);
        console.log(results)
        console.log(results.rows);
        res.locals = results
        return next();
    } catch (err){
        console.log('DB query error for createUser', err)
        return next(err)
    }
}

userController.verifyUser = async function (req, res, next) {
    // add hashing with bcrypt?
    // involve cookies?
    try{
        const {username, password} = req.body
        const qString = `SELECT password FROM users WHERE username=${username}`
        const results = await db.query(qString);
        console.log(results)
        console.log(results.rows);
        // need to figure this one out... check if passwords are equal
        // res.locals = results
        return next();
    } catch (err){
        console.log('DB query error for verifyuser', err)
        return next(err)
    }
}

// delete user?

export default userController;