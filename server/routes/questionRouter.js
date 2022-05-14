import { Router } from "express";
import questionController from '../controllers/questionController.js' // wouldn't let me deconstruct
const {getQuestions, addQuestion, deleteQuestion, editQuestion, switchStatus} = questionController;
const router = Router();

router.get('/getQuestions/:userId', getQuestions, (req, res) => { // security for user_id?
    // query for list of all topics for certain user
    console.log("/getQuestions route finished")
    // console.log(res.locals)
    return res.status(200).json(res.locals)
})

router.post('/addQuestion', addQuestion, getQuestions, (req, res) => {
    // query to add topic (and return new list - separate query?)
    console.log(req.body)
    console.log("/addQuestion route finished")
    return res.status(200).json(res.locals)
})

router.delete('/deleteQuestion/:title/:userId', deleteQuestion, getQuestions, (req, res) => { // add in getQuestions MW too
    console.log("/deleteQuestion route completed")
    return res.status(200).json(res.locals)
})

router.patch('/editQuestion', editQuestion, getQuestions, (req, res) => {
    console.log("/editQuestion route complete")
    return res.status(200).json(res.locals)
})

router.patch('/switchStatus', switchStatus, getQuestions, (req, res) => { // ok to use push?
    console.log(" /switchStatus route complete")
    return res.status(200).json(res.locals)
})

router.patch('/changeCategory', (req, res) => { // ok to use push?
    console.log("empty /changeQuestionType route set up")
    return res.status(200).json('empty /changeQuestionType put route set up')
})


export default router