import {Request, Response, NextFunction, Router} from 'express'
import {iUseApi, UseApi} from '../schemas/UseApi'
import { ApiKey } from "../schemas/ApiKey";
import _path from 'path'


class UseApiController{
    
    async create(api_key:string, length:Number){
        await UseApi.create({"api_key":api_key, "length":length})
    }

    async list(req: Request, res: Response): Promise<Response> {
        const requests = await UseApi.find();
        return res.json(requests);
    }
    
    async myCost(req: Request, res: Response): Promise<Response> {
        const uses  = await UseApi.find({"api_key":req.headers.authorization});
        var api_key = await ApiKey.findOne({"api_key":req.headers.authorization});

        if(!api_key)
            api_key = new ApiKey()

        var total = 0;
        uses.forEach((x:iUseApi) => total+= x.length);

        var custo = total * 0.01;

        return res.json({
            "user"  :api_key.username,
            "length":total,
            "cost"  :custo+"R$"
        });
    }
    
    async costByUser(req: Request, res: Response): Promise<Response> {
        const uses = await UseApi.find({"api_key":req.body.api_key});
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