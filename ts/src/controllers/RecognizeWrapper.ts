import PythonMethods from "./PythonMethods";
import { Request, Response } from "express";

export default class RecognizeWrappper{
    public static exec(req:Request, res:Response):Promise<Response>{
        var path = JSON.stringify(req.files).split(',')[1].replace("\"path\":\"", '').replace("\"", '');
        var file = path.split("\\\\")[path.split("\\\\").length-1]

        return PythonMethods.exec(req, res, path, file);
        
    }
}