import {Request, Response, NextFunction, Router} from 'express'
import {WordAnalyzer, iWordAnalyzer} from '../schemas/WordAnalyzer'

class WordAnalyzerController{
    async create(req: Request, res: Response){
        const word = await WordAnalyzer.create({"word":req.body.word});
        if(word) return res.json(word);
        return res.status(400).send()
    }

    async analyze(data:string){
        
        const words = await WordAnalyzer.find();
        const blockedWords = new Array();

        words.forEach(x => {
            if(data.toLowerCase().search(x.word) != -1){
                blockedWords.push({"word":x.word})
            }
        })

        if(blockedWords.length != 0) return blockedWords;
        
        return {};
    }
}

export default new WordAnalyzerController();