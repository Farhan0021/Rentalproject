import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'

let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        console.log(obj)
    }
    else{
        res.send({success:false});
    }
}

export {SeekerProfile};