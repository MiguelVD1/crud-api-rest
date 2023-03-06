const {Sequelize}= require('sequelize');

const{config}=require('../config/config');
const setupModels=require('../db/models');

//configuramos sequelize
const sequelize= new Sequelize(
 config.dbName,// nombre de la bd
 config.dbUser,//usuario de la bd
 config.dbPassword,//contraseña de la bd
    {
        host:config.dbHost,
        dialect:'mysql'
    }
);
sequelize.sync();
setupModels(sequelize);

module.exports=sequelize;