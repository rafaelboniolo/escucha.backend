import WordAnalyzerController from "./WordAnalyzerController";
const cmd = require('node-cmd')
import _path from 'path'
import {Request, Response, NextFunction, Router} from 'express'
import {iUseApi, UseApi} from '../schemas/UseApi'
import UseApiController from "./UseApiController";

export default class PythonMethods{
    public static exec(req:Request, res:Response, path:String, file:String): Promise<Response>{
        
        return cmd.get(
            'pipenv run python '+ __dirname.split("\\ts")[0] + _path.sep+'py'+_path.sep+'recognize.py '+path+' ' +file,
            async function(err:any, data:any, stderr:any){
                if(data){
                    console.log(data)
                    const authorization = req.headers.authorization||""
                    await UseApiController.create(authorization, data.length)
                    var obj = {"text":data}
                    WordAnalyzerController.analyze(data).then((result)=>{
                        cmd.get("del "+path.split("\\\\").join('\\'), ()=>{})
                        return res.json(result);
                    });   
                }       
                if(err) {
                    cmd.get("del "+path.split("\\\\").join('\\'), ()=>{})
                    return res.status(500).send(err);
                }
                if(stderr){
                    cmd.get("del "+path.split("\\\\").join('\\'), ()=>{})
                    return res.status(500).send(stderr);
                }               
              }
        );
    }
}