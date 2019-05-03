import api_key from './key';
import {Request, Response, NextFunction} from "express";


export default class Auth{

    public static authenticate(req: Request, res: Response, next: NextFunction){
        
        if(!req.headers.authorization){
            console.log("Request rejected msg: No token provider");
            return res.status(401).send({err:"No token provider"});
        }
            
        if(req.headers.authorization != api_key){
            console.log("Request rejected msg: Token error");
            return res.status(401).send({err:"Token error"})
        }
        console.log("Request accepted");
        
        next();
    }
}
