import {Request, Response, NextFunction, Router} from 'express'
import {WordAnalyzer, iWordAnalyzer} from '../schemas/WordAnalyzer'
import { deprecate } from 'util';

class WordAnalyzerController{

    // async create(req: Request, res: Response){
    //     const word = await WordAnalyzer.create({"word":req.body.word});
    //     if(word) return res.json(word);
    //     return res.status(400).send()
    // }

    async analyze(data:string){
        
        const wordsObj = await WordAnalyzer.find({});
        const blockedWords = new Array();
        
        wordsObj.forEach(x => {
            const {category} = x;
            category.words.forEach(y=>{
                if(data.toLowerCase().search(y) != -1){
                    blockedWords.length ? 
                        blockedWords.filter(k => k.category == category.name).length ?
                            blockedWords.filter(k => k.category == category.name)[0].words.push(y)
                            :blockedWords.push({"category":category.name,"words":[y]})
                    :blockedWords.push({"category":category.name,"words":[y]})        
                } 
            })
        })

        if(blockedWords.length != 0) return blockedWords;
        
        return {};
    }

    
    async teste(){}

}

export default new WordAnalyzerController();