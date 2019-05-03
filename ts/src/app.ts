import express from "express"
import mongoose from 'mongoose'
import routes from './routes'
import formidable from 'express-formidable'
import RequestMonitorController from './controllers/RequestMonitorController'
import mongodb from './database/mongoConfig'
import Auth from './security/Auth'

class App{
    public express: express.Application;

    public constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
        this.database()
    }

    private middlewares():void{
        this.express.use(express.json());
        this.express.use(RequestMonitorController.create)
        this.express.use(Auth.authenticate)
        this.express.use(formidable({
            encoding: 'utf-8',
            uploadDir: 'C://Users//rafae//OneDrive//Documentos//GitHub//escucha.backend//tmp//files',
            multiples: true, // req.files to be arrays of files
          } ))
    }

    private database():void{
        mongoose.connect(mongodb,{useNewUrlParser:true});
    }

    private routes():void{
        this.express.use(routes);
        // this.express.get('/easy',(req,res)=>{
        //     return res.send("Modo Easy")
        // })
    }   
}
export default new App().express;


