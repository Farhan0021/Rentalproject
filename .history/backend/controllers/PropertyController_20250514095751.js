import Prop from '../models/Property.js'
import jwt from 'jsonwebtoken'
let SaveProperty = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            console.log(obj);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

export { SaveProperty}