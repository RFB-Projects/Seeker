import { Router } from "express";
// import controllers
import topicController from '../controllers/topicController.js'
const {getTopics, addTopic, updateStatus, deleteTopic} = topicController;
const router = Router();

router.get('/getTopics/:userId', getTopics, (req, res) => {
    console.log("/getTopics route complete")
    return res.status(200).json(res.locals)
})

router.patch('/updateStatus', updateStatus, getTopics, (req, res) => { // ok to use push?
    console.log("/updateStatus route complerte")
    return res.status(200).json(res.locals)
})

router.post('/addTopic', addTopic, getTopics, (req, res) => {
    console.log("/addTopics route complete")
    return res.status(200).json(res.locals)
})

router.delete('/deleteTopic/:userId/:title', deleteTopic, getTopics, (req, res) => { // ok to use delete?
    console.log("/deleteTopic route complete")
    return res.status(200).json(res.locals)
})

router.put('/writeInTopic', (req, res) => {
    console.log("empty /writeInTopic route set up")
    return res.status(400).json('empty /writeInTopic put route set up')
})



export default router