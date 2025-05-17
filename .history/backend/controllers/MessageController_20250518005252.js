import Msg from '../models/Message.js';
import jwt from 'jsonwebtoken'

let saveMessage = async(req, res)=>{
    let token = req.body.seeker_token;
    let obj = jwt.decode(token, process.env.ENC_KEY);
    console.log(obj);
}

export {saveMessage};