import sah1 from 'sha1'
import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'
let SeekerAuth = async(req,res)=>{
    // console.log(req.body);
    let {email, password} = req.body;

    let result = await Seeker.find({email:email});
    
    if(result.length==1)// that means email id si coorect 
    {
        if(result[0].password == sah1(password))
        {
            let obj = {id : result[0]._id, email : result[0].email};
            
            let token = jwt.sign(ogj,"hello");
            res.send({success:true, token : token});

        }
        else{
            res.send({success:false, errType :2})
        }

    }
    else{
        res.send({success:false,errType:1 })

    }

}

export {SeekerAuth}

