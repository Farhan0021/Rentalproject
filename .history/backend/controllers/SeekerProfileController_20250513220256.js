import Seeker from '../models/Seeker.js'

let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){

    }
    else{
        res.send({success:false});
    }
}

export {SeekerProfile};