import TaskModel from "../models/TaskModel.js";
import { v4 as uuidv4 } from 'uuid';


export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(`TASKS_NOT_FOUND`)
  }
};

export const createTask = async (req, res) => {
    try {
        const taskData = req.body
        taskData._id = uuidv4()
        const tasks = await new TaskModel(taskData).save()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).send(`TASKS_NOT_CREATED`)
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params._id
        const taskData = req.body
        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, taskData, { new: true })

        if(!updatedTask){
            return res.status(404).send(`TASKS_NOT_FOUND`);
        }
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).send(`TASKS_CANT_UPDATED`)
    }
}

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params._id
        const deleteTask = await TaskModel.deleteOne({ _id : taskId })

        if(!deleteTask){
            return res.status(404).send(`TASKS_CANT_DELETED`);
        }

        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(500).send(`TASKS_CANT_DELETED`)
    }
}

