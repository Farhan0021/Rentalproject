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
            console.log(req.body);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

export { SaveProperty}