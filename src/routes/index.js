const express = require('express');

const personaRouter=require('./persona.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/persona',personaRouter);
}

module.exports =routerApi;