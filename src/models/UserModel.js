import {Schema, model} from 'mongoose'
const collectionName = 'users'

const schema = Schema({
    _id: String,
    name: String,
    email: String,
    password: String
},{
    strict: true,
    collection: collectionName,
    _id: false
})

export default model(collectionName, schema)