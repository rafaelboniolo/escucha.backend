import {Schema, model} from 'mongoose'

const UseApiSchema = new Schema({
    api_key :String,
    length   :String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export default model('UseApi', UseApiSchema);