const personaservice=require('../services/persona.services');
const service= new personaservice();


const get= async(req,res)=>{
    try{
        const responde= await service.find();
        res.json(responde);
    }catch(error){
        res.status(500).send({succes:false,message:error.message});
    }
}

const getById= async(res,req)=>{
    try{
        const{id}=req.params;
        const response= await service.findOne(id);
        res.json(response);
    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

const update = async(req,res)=>{
    try{
        const {id}=req.params;
        const body=req.body;
        const responde = await service.update(id,body);
        res.json(responde);
    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

const create= async(req,res)=>{
    try{
        const responde = await service.create(req,res);
        res.json({succes:true,data:responde});
    }catch(error){
        res.status(500).send({succes:false,message:error.message});
    }
}

const _delete = async(req,res)=>{
    try{
        const {id}=req.params;
        const responde=await service.delete(id);
        res.json(responde);
    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

// se exportan todas las funciones
module.exports={
    create,get,getById,update,_delete
};