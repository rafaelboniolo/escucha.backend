import {Request, Response} from 'express'

export default interface iController{
    create(req:Request, res:Response):Promise<Response>;
    list(req:Request, res:Response):Promise<Response>;
    
}