import {Schema, model, Document, Model} from 'mongoose'

export interface iWordAnalyzer extends Document{
    word  :string,
}

const WordAnalyzerSchema = new Schema({
    word :String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const WordAnalyzer: Model<iWordAnalyzer> = model<iWordAnalyzer>("WordAnalyzer", WordAnalyzerSchema);