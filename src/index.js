const express = require('express');
const dotenv = require('dotenv');
const cors= require('cors');

const routerApi=require('./routes');

//app
dotenv.config();
const app=express();
const port= process.env.PORT || 3000;
app.use(cors());
app.use(express.json());//para recibir formatos json


//configuracion 


//middleware


//rutas
app.get('/',(req,res)=>{
    res.send('back end con nodejs');
});

routerApi(app);
//servidor
app.listen(port, ()=>{
    console.log('servidor levandotado en el puerto ',port);
});