import Seeker from '../models/Seeker.js'
let SeekerAuth = async(req,res)=>{
    // console.log(req.body);
    let {email, password} = req.body;

    let result = await Seeker.find({email:email});
    console.log(result);

}

export {SeekerAuth}

