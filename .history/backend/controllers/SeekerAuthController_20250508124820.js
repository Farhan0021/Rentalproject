import sah1 from 'sha1'
import Seeker from '../models/Seeker.js'
let SeekerAuth = async(req,res)=>{
    // console.log(req.body);
    let {email, password} = req.body;

    let result = await Seeker.find({email:email});
    
    if(result.length==1)// that means email id si coorect 
    {
        if(result[0].password == sah1(password))
        {

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

