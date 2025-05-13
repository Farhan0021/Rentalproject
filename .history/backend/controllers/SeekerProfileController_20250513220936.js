import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'

let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){

        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

export {SeekerProfile};