import {API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4} from './key';
import {Request, Response, NextFunction} from "express";
import ApiKeyController from '../controllers/ApiKeyController';


export default class Auth{

    public static async authenticate(req: Request, res: Response, next: NextFunction){
        
        if(!req.headers.authorization){
            console.log("Request rejected msg: No token provider");
            return res.status(401).send({err:"No token provider"});
        }
            
        const key = await ApiKeyController.find(req.headers.authorization)
        if (key.api_key != req.headers.authorization){
            
            console.log("Request rejected msg: Token error");
            return res.status(401).send({err:"Token error"})
        }
        console.log("Request accepted from "+key.username);
        
        next();
    }
}
