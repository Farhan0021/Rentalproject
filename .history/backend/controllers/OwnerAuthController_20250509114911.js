import Owner from "../models/Owner.js";
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'

let OwnerAuth = async(req, res)=>{
    let {email, password} = req.body;
    let result = await Owner.find({email : email});
    if(result.length == 1)
    {
        if(result[0].password == sha1(password))
        {
            let obj = { id : result[0]._id};
        }
        else{
            res.send({success:false, errType : 2});
        }
    }
    else{
        res.send({success:false, errType : 1});
    }
}

export {OwnerAuth}