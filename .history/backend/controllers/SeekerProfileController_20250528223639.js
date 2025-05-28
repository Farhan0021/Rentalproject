import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'
import sha1 from 'sha1';

let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let result = await Seeker.find({_id : obj.id});
            res.send(result);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

let EditSeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.updateMany({_id : id}, req.body);
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

const updatePass = async(req, res)=>{
    if(req.headers.authorization){

        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.find({_id : id });
            if(result[0].password == sha1(req.body.password)){

            }else{
                res.send({success:false, errType : 1})
            }
        }else{

        }


    }else{
        res.send({success:false});
    }
}

export {SeekerProfile, EditSeekerProfile, updatePass};