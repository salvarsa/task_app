import express from 'express'
import  {getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js'

const taskRouter = express.Router()

//middlewares
taskRouter.use(express.json())

//Endpoints
taskRouter.route('/').get(getTasks)
taskRouter.route('/create').post(createTask)
taskRouter.route('/update/:_id').put(updateTask)
taskRouter.route('/delete/:_id').delete(deleteTask)

export default taskRouter 