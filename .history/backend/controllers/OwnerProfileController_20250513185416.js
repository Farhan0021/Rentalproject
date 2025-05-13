import jwt from 'jsonwebtoken'
let OwnerProfile = async(req, res)=>{
   if(req.headers.authorization){
    let token = req.headers.authorization;
    let obj = jwt.decode(token, process.env.ENC_KEY);
   }else{
    res.send({success:false});
   }
}

export {OwnerProfile}