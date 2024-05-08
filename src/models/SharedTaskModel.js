import {Schema, model} from 'mongoose'
const collectionName = 'shared_task'

const schema = Schema({
    _id: String,
    taskId: String,
    userId: String,
    sharedId: String
},{
    strict: true,
    collection: collectionName,
    _id: false
})

export default model(colletionName, schema)