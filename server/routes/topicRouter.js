import { Router } from "express";
// import controllers
import topicController from '../controllers/topicController.js'
const {getTopics, updateStatus} = topicController;
const router = Router();

router.get('/getTopics/:userId', getTopics, (req, res) => {
    // query for list of all topics for certain user
    console.log("/getTopics route complete")
    return res.status(200).json(res.locals)
})

router.patch('/updateStatus', updateStatus, getTopics, (req, res) => { // ok to use push?
    console.log("/updateStatus route complerte")
    return res.status(200).json(res.locals)
})

router.post('/addTopic', (req, res) => {
    // query to add topic (and return new list - separate query?)
    console.log("empty /adTopics post route set up")
    return res.status(400).json('empty /addTopic post route set up')
})

router.put('/writeInTopic', (req, res) => {
    console.log("empty /writeInTopic route set up")
    return res.status(400).json('empty /writeInTopic put route set up')
})

router.delete('/deleteTopic', (req, res) => { // ok to use delete?
    console.log("empty /deleteTopic route set up")
    return res.status(400).json('empty /deleteTopic delete route set up')
})

export default router