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
import Razorpay from 'razorpay'

// import dotenv from 'dotenv';
// dotenv.config();

const KEY_ID = "rzp_test_zM1RfP1SDCMo0M";
const KEY_SECRET = "Wk6rXi8pe8SisWYppsmECpgk";

const rzpy = new Razorpay({
  key_id : KEY_ID,
  key_secret : KEY_SECRET
});
try{
  let order = await rzpy.orders.create({
    amount : amount*100,
    currency : 'INR'
  });
  console.log(order);
}catch(err){
  console.log("*********",err);
}


let saveMessage = async (req, res) => {
    try {
        const token = req.body.seeker_token;
        const obj = jwt.decode(token, process.env.ENC_KEY); // Make sure ENC_KEY is set
        const amount = req.body.amount;

        const order = await req.body.orders.create({
          amount: amount * 100,
          currency: 'INR'
        })

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


// let getAllMsgByPropertyId = async (req, res) => {
//     try {
//         const result = await Msg.find({ property_id: req.params.pid });
//         res.send(result);
//     } catch (err) {
//         console.error('Error fetching messages:', err);
//         res.status(500).send({ success: false, error: 'Failed to fetch messages' });
//     }
// };


export const getAllMsgByPropertyId = async (req, res) => {
  try {
    const propertyId = req.params.id;

    const messages = await Msg.find({ propertyId })
      .populate('seeker_id', 'name email contact') 
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};


export { saveMessage};
