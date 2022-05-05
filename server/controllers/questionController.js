import db from '../models/dbModel.js'
const questionController = {};

questionController.getQuestions = async function (req, res, next) {
    try{
        const { user_id } = req.body;
        const qString = `SELECT * FROM questions WHERE user_id=${user_id}`
        const results = await db.query(qString);
        console.log(results)
        res.locals = results.rows
        // come back to this - how to save in res.locals?
        return next();
    } catch (err){
        console.log('DB query error for getQuestions', err)
        return next(err) // route errors more cleanly
    }
}

questionController.addQuestion = async function (req, res, next) {
    try{
        const { title, blurb, user_id } = req.body
        const qString = `INSERT INTO questions VALUES ('${title}', '${blurb}','${user_id}')`
        const results = await db.query(qString);
        console.log(results)
        // come back to this - how to save in res.locals?
        return next(); 
    } catch (err){
        console.log('DB query error for addQuestion', err)
        return next(err) // route errors more cleanly (query failed goes here)
    }
}

questionController.deleteQuestion = async function (req, res, next) {
    try{
        const { title } = req.body
        const qString = `DELETE FROM questions WHERE title=${title}`
        const results = await db.query(qString);
        console.log(results)
        console.log(results.rows);
        // come back to this - how to save in res.locals?
        return next();
    } catch (err){
        console.log('DB query error for deleteQuestion', err)
        return next(err)
    }
}

// EDIT QUESTION

// CHANGE CATEGORY

export default questionController;