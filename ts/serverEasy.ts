import express from 'express'
const app = express();

app.get("/a",(req, res)=>{
    return res.send("Easy server");
})

app.listen(3000);