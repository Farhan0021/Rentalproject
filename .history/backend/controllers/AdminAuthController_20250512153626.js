import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'

let AdminAuth = async(req, res)=>{
    let {username, password} = req.body;
    let result = await Admin.find({username:username});
    if(result.length==1)
    {

    }
    else{
        res.send
    }
}