import {Schema, model, Document, Model} from 'mongoose'

export interface iWordAnalyzer extends Document{
    category:{
        name:String,
        words: [string]
    }
}


const WordAnalyzerSchema = new Schema({
    
    category:{
        name:String,
        words: [String]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const WordAnalyzer: Model<iWordAnalyzer> = model<iWordAnalyzer>("WordAnalyzer", WordAnalyzerSchema);
