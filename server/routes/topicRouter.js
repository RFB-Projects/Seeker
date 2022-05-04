import { Router } from "express";
// import controllers
const router = Router();

router.get('/getTopics', (req, res) => {
    // query for list of all topics for certain user
    console.log("empty /getTopics get route set up")
    return res.status(400).json('empty /getTopics get route set up')
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

router.put('/changeTopicStatus', (req, res) => { // ok to use push?
    console.log("empty /changeTopicStatus route set up")
    return res.status(400).json('empty /changeTopicStatus put route set up')
})

router.delete('/deleteTopic', (req, res) => { // ok to use delete?
    console.log("empty /deleteTopic route set up")
    return res.status(400).json('empty /deleteTopic delete route set up')
})