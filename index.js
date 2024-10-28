
const express=require('express');

const PORT=process.env || 3000;
const app=express();


app.get('/',(request,response)=>{
    return response.send("Hello world");
})




app.listen(PORT,(err)=>{
    if(err) console.log("Server err");
    console.log("Server running in PORT "+PORT);
    
})