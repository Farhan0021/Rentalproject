import Prop from '../models/Property.js'
import jwt from 'jsonwebtoken'
let SaveProperty = async(req, res)=>{
    if(req.body.deposite==''){
        delete req.body.deposite;
    }
    if(req.body.amenity==''){
        req.body.amenity = [];
    }

    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            req.body.owner_id = id;
            await Prop.create(req.body);
            res.send({success:true})
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

let getAllproperty = async(req,res)=>{
    let result = await Prop.find();
    res.send(result);
}

let getAllPropertyByOwner = async(req, res)=>{
    if(req.headers.authorization)
    {
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Prop.find({owner_id : id});
            res.send(result);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

let getAllPropertyWithOwner = async(req,res)=>{
    let result = await Prop.find().populate("owner_id").exec();
    res.send(result);
}

let getAllPropertyById = async(req, res)=>{
    let id = req.params.id;
}

export { SaveProperty,getAllPropertyWithOwner, getAllproperty, getAllPropertyByOwner, getAllPropertyById}