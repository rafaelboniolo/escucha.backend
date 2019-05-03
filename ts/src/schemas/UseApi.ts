import {Schema, model, Document, Model} from 'mongoose'

export interface iUseApi extends Document{
    api_key  :string,
    length   :number
}

const UseApiSchema = new Schema({
    api_key :String,
    length   :Number,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const UseApi: Model<iUseApi> = model<iUseApi>("UseApi", UseApiSchema)