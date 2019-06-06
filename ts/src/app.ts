import express from "express"
import mongoose from 'mongoose'
import routes from './routes'
import formidable from 'express-formidable'
import mongodb from './database/mongoConfig'
import Auth from './security/Auth'
import path from 'path'

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
        // this.express.use(Auth.authenticate)
        this.express.use(formidable({
            encoding: 'utf-8',
            uploadDir:  __dirname.split("\\ts")[0] +path.sep+'ts'+path.sep+'tmp'+path.sep+'files',
            multiples: true,
          } ))
    }

    private database():void{
        mongoose.connect(mongodb,{useNewUrlParser:true});
    }

    private routes():void{
        this.express.use(routes);
    }   
}
export default new App().express;


