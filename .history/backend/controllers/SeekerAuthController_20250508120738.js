let SeekerAuth = async(req,res)=>{
    // console.log(req.body);
    let {email, password} = req.body;

    let result = await SeekerAuth.find({email:email});
    console.log(result);

}

export {SeekerAuth}

