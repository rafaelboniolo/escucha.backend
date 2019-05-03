import iController from "./iController";
import {Request, Response, NextFunction, Router} from 'express'
import {iUseApi, UseApi} from '../schemas/UseApi'
const fs = require('fs')
const cmd = require('node-cmd')


class UseApiController{
    
    async create(req: Request, res: Response){
        var path = JSON.stringify(req.files).split(',')[1].replace("\"path\":\"", '').replace("\"", '');
        var file = path.split("\\\\")[path.split("\\\\").length-1]

        cmd.get(
            'python C:\\Users\\rafae\\OneDrive\\Documentos\\GitHub\\escucha.backend\\py\\recognize.py '+path+' ' +file,
            async function(err:any, data:any, stderr:any){
                if(data){
                    await fs.readFile('C:\\Users\\rafae\\OneDrive\\Documentos\\GitHub\\escucha.backend\\tmp\\log\\'+file.concat(".txt"),'utf8', function(err:any,data:String){
                        UseApi.create({"api_key":req.headers.authorization, "length":data.length})
                    });
                    return res.status(200).send();
                }
                
                if(err || stderr) return res.status(500)
              }
        );
        // res.status(404).send();
    }

    async list(req: Request, res: Response): Promise<Response> {
        const requests = await UseApi.find();
        return res.json(requests);
    }
    
    async listByUser(req: Request, res: Response): Promise<Response> {
        const uses = await UseApi.find({"api_key":req.headers.authorization});
        var total = 0;
        uses.forEach((x:iUseApi) => total+= x.length);

        var custo = total * 0.01;

        return res.json({
            "user":req.headers.authorization,
            "length":total,
            "cost": custo+"R$"
        });
    }
       
}

export default new UseApiController();