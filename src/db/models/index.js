const {Persona,personaschemas}=require('./personas');

function setupModels(sequelize){
    Persona.init(personaschemas,Persona.config(sequelize));//pasmaois el primer campo donde estan los datos y el otro donde ejcuta la base de datos
}

module.exports=setupModels;