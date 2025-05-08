import Seeker from '../models/Seeker.js'
let SeekerAuth = async(req,res)=>{
    // console.log(req.body);
    let {email, password} = req.body;

    let result = await Seeker.find({email:email});
    
    if(result.length==1)// that means email id si coorect 
    {

    }
    else{
        res.send({success:false,errType:1 })

    }

}

export {SeekerAuth}

