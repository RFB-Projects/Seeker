import express from 'express'
import topicRouter from './routes/topicRouter.js'
import questionRouter from './routes/questionRouter.js'
import userRouter from './routes/userRouter.js'
import cors  from 'cors';

const PORT = 2000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {console.log(req.url); return next()})
// app.use for CORS, urlEncoded?

// set up SQL URL wth a .env file
app.use('/api/question', questionRouter)
app.use('/api/topic', topicRouter)
app.use('/api/user', userRouter)

app.use('/', (req, res) => {
    console.log("Main server bad URL catcher")
    return res.status(400).json("Bad URL...!")
})
// 404 error handler
app.use('/*', (req, res) => {
    res.sendStatus(404)
})
// global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express caught unknown middleware',
        status:500,
        message: {err: 'An error occurred'},
    }
    const errorObj = {...defaultError, ...err}
    console.log(errorObj)
    return res.status(errorObj.status).json(errorObj.message)
})

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))
