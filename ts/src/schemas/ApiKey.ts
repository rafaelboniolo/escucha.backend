import {Schema, model, Document, Model} from 'mongoose'

export interface iApiKey extends Document{
    api_key  :string,
    username :string
}

const ApiKeySchema = new Schema({
    api_key :String,
    username:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const ApiKey: Model<iApiKey> = model<iApiKey>("ApiKey", ApiKeySchema)