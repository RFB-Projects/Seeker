import db from '../models/dbModel.js'
const questionController = {};

questionController.getQuestions = async function (req, res, next) {
    try{
        const { userId } = req.params;
        const qString = `SELECT * FROM questions WHERE user_id=${userId}`
        const results = await db.query(qString);
        // console.log(results)
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
        const { title, blurb, userId } = req.body // still ok - redundant bc user_id in params
        req.params = Object.assign({}, req.params, { userId })
        const qString = `INSERT INTO questions VALUES ('${title}', '${blurb}','${userId}')`
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
        console.log("hit delete controller")
        console.log('params', req.params)
        const { title, userId } = req.params
        console.log("delete question title", title)
        const qString = `DELETE FROM questions WHERE title='${title}' AND user_id=${userId}`
        const results = await db.query(qString);
        console.log("server results from delete question", results)
        console.log(results.rows);
        res.locals.success = true;
        // come back to this - how to save in res.locals?
        return next();
    } catch (err){ // goes here if not found
        console.log('DB query error for deleteQuestion', err)
        // res.locals.success = false;
        return next(err)
    }
}

// EDIT QUESTION
questionController.editQuestion = async function (req, res, next) {
    try{
        const { title, currentBlurb, userId } = req.body
        req.params = Object.assign({}, req.params, { userId })
        const qString = `UPDATE questions SET blurb='${currentBlurb}' WHERE user_id=${userId} AND title='${title}'` // FILL IN
        const results = await db.query(qString);
        console.log("back from update query", results)
        // come back to this - how to save in res.locals?
        return next(); 
    } catch (err){
        console.log('DB query error for editQuestion', err)
        return next(err) // route errors more cleanly (query failed goes here)
    }
}

// CHANGE CATEGORY

export default questionController;