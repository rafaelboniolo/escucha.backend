import {Schema, model} from 'mongoose'

const RequestMonitorSchema = new Schema({
    url     :String,
    ip      :String,
    hostname:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export default model('RequestMonitor', RequestMonitorSchema);