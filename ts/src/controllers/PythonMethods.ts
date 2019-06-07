import WordAnalyzerController from "./WordAnalyzerController";
const cmd = require('node-cmd')
import _path from 'path'
import {Request, Response} from 'express'
import UseApiController from "./UseApiController";
import PathBuilder from "./PathBuillder";

export default class PythonMethods{
    public static exec(req:Request, res:Response, path:String, file:String): Promise<Response>{
        
        return cmd.get(
            PathBuilder.buildPythonCommand(__dirname, path, file),
            async function(err:any, data:any, stderr:any){
                if(data){
                    const authorization = req.headers.authorization || ''
                    await UseApiController.create(authorization, data.length)
                   
                    WordAnalyzerController.analyze(data).then((result)=>{
                        cmd.get(PathBuilder.builderDeleteCommand(path), ()=>{})
                        
                        return res.json({'recognized_phrase':data, result});
                    });   
                }       
                if(err) {
                    cmd.get(PathBuilder.builderDeleteCommand(path), ()=>{})
                    return res.status(400).send(err);
                }
                if(stderr){
                    cmd.get(PathBuilder.builderDeleteCommand(path), ()=>{})
                    return res.status(400).send(stderr);
                }               
              }
        );
    }
}