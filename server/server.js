import express from 'express'
import topicRouter from './routes/topicRouter'
import questionRouter from './routes/questionRouter'

const PORT = 1000
const app = express()

// app.use for CORS, json, urlEncoded 
// set up SQL URL wth a .env file
app.use('/api/questionRouter', questionRouter)
app.use('/api/topicRouter', topicRouter)

// 404 error handler
app.use('/*', (req, res) => {
    res.sendStatus(404)
})
// global error handler


app.listen(port, () => console.log(`Server listening on Port ${port}`))
