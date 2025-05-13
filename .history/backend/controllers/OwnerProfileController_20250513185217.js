
let OwnerProfile = async(req, res)=>{
   if(req.headers.authorization){
    let token = req.headers.authorization;
   }else{
    res.send({success:false});
   }
}

export {OwnerProfile}