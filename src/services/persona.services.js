const {models}= require('../libs/sequelize');

class personaservice{

    constructor() {}

    //trae todo
    async find(){
        const res= await models.persona.findAll();
        return res;
    }

    //busqueda por id
    async findOne(id){
        const res =await models.persona.findByPk(id);
        return res;
    }
    //crear 
    async create(data){
        const res= await models.persona.create(data);
        return res;
    }

    //acutliza buscando por id y despues con la data que se tiene
    async update(id,data){
        const model= await this.findOne(id);
        const res=await model.update(data);
        return res;
    }

    //eliminara por id
    async delete(id){
        const model= await this.findOne(id);
        await model.destroy();
        return {delete:true};
    }
}

module.exports=personaservice;