import Seeker from "../models/Seeker.js";
import sha1 from 'sha1'
import SendMail from "../helpers/SendMail.js";

let msgBody = `<div style="width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd;">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee;">
      <h1 style="color : #005555; font-weight : 'bold'; text-shadow: 2px 2px 2px #000;">Study-Hive</h1>
      <h2>WELCOME</h2>
    </div>
    <div style="padding: 20px;">
      <p>Hi,</p>
      <p>WellCome in STUDENTS-HIVE <br/> Here You Find Your Deam Destine.....</p>
      <div style="text-align: center; font-size: 24px; font-weight: bold;">
        Dream space Waits YOu.......
      </div>
      
      <p>Thank you,</p>
      <p>The Study-Hive Team</p>
    </div>
    <div style="text-align: center; font-size: 0.8em; color: #777; padding-top: 20px;">
      &copy; 2025 Your Company. All rights reserved.
    </div>`;

let FetchSeeker = async(req, res)=>{
    let result = await Seeker.find();
    res.send(result);
}
let FetchSeekerById = async(req,res)=>{
    let result = await Seeker.find({_id : req.params.id });
    res.send(result);
}
let SaveSeeker = async(req, res)=>{
    delete req.body.repassword;
    req.body.password = sha1
    (req.body.password);

    let result = await Seeker.create(req.body);

    await SendMail(req.body.email, 'Welcome to STUDENTS-HIVE', msgBody );

    res.send({success: true, result})
}
let UpdateSeeker = async(req,res)=>{
    let result = await Seeker.updateMany({_id : req.params.id },req.body);
    res.send({success: true, result});
}
let DeleteSeeker = async(req,res)=>{
    let result = await Seeker.deletMany({_id : req.params.id });
    res.send({success: true< result});
}

export {SaveSeeker, UpdateSeeker, FetchSeekerById, FetchSeeker, DeleteSeeker};