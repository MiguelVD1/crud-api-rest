const express =require('express');
const router=express.Router();
const personacontroller= require('../controllers/persona.controller');


//son todas las rutas creadas que se van a usar
router
    .get('/',personacontroller.get)
    .get('/:id',personacontroller.getById)
    .post('/',personacontroller.create)
    .put('/:id',personacontroller.update)
    .delete('/:id',personacontroller._delete);

module.exports=router;