// import jwt from 'jsonwebtoken'


// let saveMessage = async(req, res)=>{
//     let Msg = require("../../models/messageModel");
//     let token = req.body.seeker_token;
//     let obj = jwt.decode(token, process.env.ENC_KEY);
//     let saveDataObj = {
//         message : req.body.message,
//         seeker_id : obj.id,
//         owner_id : req.body.owner_id,
//         property_id : req.body.property_id
//     };
//     await Msg.create(saveDataObj);
//     res.send({success:true});
// }

// let getAllMsgByPropertyId = async(req, res)=>{
//     let result = await Msg.find({property_id : req.params.pid});
//     res.send(result);
// }

// export {saveMessage, getAllMsgByPropertyId};


import jwt from 'jsonwebtoken';
import Msg from '../models/Message.js';
import Seeker from '../models/Seeker.js'; // if used anywhere


// import dotenv from 'dotenv';
// dotenv.config();



let saveMessage = async (req, res) => {
    try {
        const token = req.body.seeker_token;
        const obj = jwt.decode(token, process.env.ENC_KEY); // Make sure ENC_KEY is set

        const saveDataObj = {
            message: req.body.message,
            seeker_id: obj.id,
            owner_id: req.body.owner_id,
            property_id: req.body.property_id
        };

        await Msg.create(saveDataObj);

        res.send({ success: true });
    } catch (err) {
        console.error('Error saving message:', err);
        res.status(500).send({ success: false, error: 'Failed to save message' });
    }
};


let getAllMsgByPropertyId = async (req, res) => {
    try {
        const result = await Msg.find({ property_id: req.params.pid });
        res.send(result);
    } catch (err) {
        console.error('Error fetching messages:', err);
        res.status(500).send({ success: false, error: 'Failed to fetch messages' });
    }
};

export { saveMessage, getAllMsgByPropertyId };
