import { Router } from "express";
// import controllers
const router = Router();

router.get('/getQuestions', (req, res) => {
    // query for list of all topics for certain user
    console.log("empty /getQuestions get route set up")
    return res.status(400).json('empty /getQuestions get route set up')
})

router.post('/addQuestion', (req, res) => {
    // query to add topic (and return new list - separate query?)
    console.log(req.body)
    console.log("empty /addQuestion post route set up")
    return res.status(400).json('empty /addQuestion post route set up')
})

router.put('/writeInQuestion', (req, res) => {
    console.log("empty /writeInQuestion route set up")
    return res.status(400).json('empty /writeInQuestion put route set up')
})

router.put('/changeQuestionType', (req, res) => { // ok to use push?
    console.log("empty /changeQuestionType route set up")
    return res.status(400).json('empty /changeQuestionType put route set up')
})

router.delete('/deleteQuestion', (req, res) => { // ok to use delete?
    console.log("empty /deleteQuestion route set up")
    return res.status(400).json('empty /deleteQuestion delete route set up')
})

export default router