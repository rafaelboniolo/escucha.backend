import iController from "./iController";
import {Request, Response, NextFunction} from 'express'
import RequestMonitor from '../schemas/RequestMonitor'

class RequestMonitorController{
    async create(req: Request, res: Response, next: NextFunction){
        await RequestMonitor.create({"url":req.url, "ip":req.ip, "hostname":req.hostname});
        next();
        
    }

    async list(req: Request, res: Response): Promise<Response> {
        const requests = await RequestMonitor.find();
        return res.json(requests);
    }   
}

export default new RequestMonitorController();