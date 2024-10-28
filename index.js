
const express=require('express');

const PORT=process.env.PORT || 3000;
const app=express();


app.set('view engine','ejs');

// static file
app.use(express.static('src'))
app.use(express.static('public'))


app.get('/',(request,response)=>{
    return response.render('D:/Tic-Tac-Toe/index.js')
})




app.listen(PORT,(err)=>{
    if(err) console.log("Server err");
    console.log("Server running in PORT "+PORT);
    
})