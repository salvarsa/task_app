import {Schema, model} from 'mongoose'
const colletionName = 'task'

const schema = Schema({
    _id: {  type: String },
    title: { type: String },
    date: {
        startDate: { type: Date, default: Date.now },
        end: { type: Date }
    },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    //userId: { type: String }
},{
    strict: true,
    collection: colletionName,
    _id: false
})

export default model(colletionName, schema)