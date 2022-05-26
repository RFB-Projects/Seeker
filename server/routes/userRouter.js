import { Router } from "express";
import userController from '../controllers/userController.js' // unpack
import questionController from '../controllers/questionController.js' // unpack

const router = Router();

router.post('/login', (req, res) => {
    // MW to check credentials
    // if found, redirect and also get questions (or whatever is on landing page)
    // if not found, send back message (usr and/or pwd not found)
    console.log("empty /login post route set up")
    return res.status(400).json('empty /login post route set up')
})

router.post('/signup', (req, res) => {
    // MW to check if it already exists
    // MW to verify password is long enough (must be X digits)
    // If it's all good, then MW to add to the DB
    // redirect to get (empty) questions page and send to homepage
    console.log("empty /signup post route set up")
    return res.status(400).json('empty /signup post route set up')
})

export default router