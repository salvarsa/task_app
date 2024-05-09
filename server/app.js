import express from 'express'
import { connect } from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import taskRouter from './src/routes/taskRoutes.js'

// const db = process.env.MONGO_URI || 'mongodb://localhost:27017/task_app';
const db = process.env.MONGO_URI  || 'mongodb+srv://salvarsadev13:Pogo1234@task-app.gemnots.mongodb.net/?retryWrites=true&w=majority&appName=task_app'

const connectDb = async () => {
    try {
        await connect(db)
        console.log("DB_CONNECTED...");
    } catch (error) {
        console.error('DB CONNECTION ERROR:', error);
    }
}

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/tasks', taskRouter)

const PORT = 2402

app.listen(PORT, () => {
    connectDb()
    console.log(`Ready at port: ${PORT}`);
})