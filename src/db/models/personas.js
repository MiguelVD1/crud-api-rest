const {Model,DataTypes}=require('sequelize');

const PERSON_TABLE='personas';

//se crea el modelo 
class Persona extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName:PERSON_TABLE,
            modelName: 'Personas',
            timestamps:true
        }
    }
}

//defimos el modelo 
const personaSchemas={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    Name:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    lastname:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'apellido'
    },
    email:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'Correo'
    },
    phone:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'numero'
    }
}

module.exports={Persona,personaSchemas};