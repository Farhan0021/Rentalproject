import jwt from 'jsonwebtoken'

let saveMessage = async(req, res)=>{
    let token = req.body.seeker_token;
    let obj = jwt.decode(token, process.env.ENC_KEY);
    let saveDataObj = {
        message : req.body.message,
        seeker_id : obj.id,
        owner_id : req.body.owner_id,
        property_id : req.body.property_id
    };
    await Msg.create(saveDataObj);
    res.send({success:true});
}

let getAllMsgByPropertyId = async(req, res)=>{
    let result = await Msg.find({property_id : req.params.pid});
    res.send(result);
}

export {saveMessage, getAllMsgByPropertyId};