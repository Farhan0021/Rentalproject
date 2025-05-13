import jwt from 'jsonwebtoken'
import  Owner from '../models/Owner';

let OwnerProfile = async(req, res)=>{
   if(req.headers.authorization){
    let token = req.headers.authorization;
    let obj = jwt.decode(token, process.env.ENC_KEY);
    if(obj){
        let id = obj.id;
    }else{
        res.send({success:false});
    }
   }else{
    res.send({success:false});
   }
}

export {OwnerProfile}