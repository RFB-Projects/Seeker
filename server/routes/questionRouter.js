import { Router } from "express";
import questionController from '../controllers/questionController.js' // wouldn't let me deconstruct
const {getQuestions, addQuestion, deleteQuestion} = questionController;
const router = Router();

router.get('/getQuestions/:user_id', getQuestions, (req, res) => { // security for user_id?
    // query for list of all topics for certain user
    console.log("empty /getQuestions get route set up")
    return res.status(400).json(res.locals)
})

router.post('/addQuestion', addQuestion, (req, res) => {
    // query to add topic (and return new list - separate query?)
    console.log(req.body)
    console.log("empty /addQuestion post route set up")
    return res.status(400).json('empty /addQuestion post route set up')
})

router.put('/writeInQuestion', (req, res) => {
    console.log("empty /writeInQuestion route set up")
    return res.status(400).json('empty /writeInQuestion put route set up')
})

router.put('/changeCategory', (req, res) => { // ok to use push?
    console.log("empty /changeQuestionType route set up")
    return res.status(400).json('empty /changeQuestionType put route set up')
})

router.delete('/deleteQuestion', (req, res) => { // ok to use delete?
    console.log("empty /deleteQuestion route set up")
    return res.status(400).json('empty /deleteQuestion delete route set up')
})

export default router