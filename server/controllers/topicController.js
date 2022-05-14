import db from '../models/dbModel.js'
const topicController = {};

topicController.getTopics = async function (req, res, next) {
    try{
        const { userId } = req.params;
        const qString = `SELECT * FROM topics WHERE user_id=${userId}`
        const results = await db.query(qString);
        res.locals = results.rows
        return next();
    } catch (err){
        console.log('DB query error for getTopics', err)
        return next(err) // route errors more cleanly
    }
}

topicController.updateStatus = async function (req, res, next) {
    try{
        const { title, status, userId } = req.body
        req.params = Object.assign({}, req.params, { userId }) // so it's there for getTopics MW
        const qString = `UPDATE topics SET status='${status}' WHERE user_id=${userId} AND title='${title}'` // FILL IN
        const results = await db.query(qString);
        console.log("back from update query", results)
        // don't need to save in res.locals
        return next(); 
    } catch (err){
        console.log('DB query error for Topic - updateStatus', err)
        return next(err) // route errors more cleanly (query failed goes here)
    }
}
export default topicController;