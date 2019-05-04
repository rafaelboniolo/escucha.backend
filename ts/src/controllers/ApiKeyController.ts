import {Request, Response, NextFunction, Router} from 'express'
import {ApiKey, iApiKey} from '../schemas/ApiKey'

class ApiKeyController{

    async create(req: Request, res: Response){
        const key = await ApiKey.create(
            {
                "api_key":new Buffer(req.body.username).toString('base64'),
                "username":req.body.username
            }
        );

        if(key) return res.json(key);
        return res.status(500)
    }

    async find(key:string){
        const api_key = await ApiKey.findOne({'api_key':key})
        if(!api_key)
            return new ApiKey();
        return api_key;
    }

}

export default new ApiKeyController();