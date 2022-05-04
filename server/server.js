import express from 'express'
import topicRouter from './routes/topicRouter.js'
import questionRouter from './routes/questionRouter.js'
import userRouter from './routes/userRouter.js'

const PORT = 2000
const app = express()

app.use(express.json())
// app.use for CORS, urlEncoded?

// set up SQL URL wth a .env file
app.use('/api/question', questionRouter)
app.use('/api/topic', topicRouter)
app.use('/api/user', userRouter)

app.use('/', (req, res) => {
    console.log("Hit server")
    return res.status(400).json("Catch all...!")
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
