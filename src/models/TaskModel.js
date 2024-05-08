import {Schema, model} from 'mongoose'
const colletionName = 'task'

const schema = Schema({
    _id: String,
    title: String,
    completed: Boolean,
    userId: String
},{
    strict: true,
    collection: colletionName,
    _id: false
})

export default model(colletionName, schema)