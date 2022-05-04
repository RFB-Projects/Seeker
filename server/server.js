import express from 'express'
import topicRouter from './routes/topicRouter'
import questionRouter from './routes/questionRouter'
import userRouter from './routes/userRouter'

const PORT = 1000
const app = express()

// app.use for CORS, json, urlEncoded 
// set up SQL URL wth a .env file
app.use('/api/question', questionRouter)
app.use('/api/topic', topicRouter)
app.use('/api/user', userRouter)

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
