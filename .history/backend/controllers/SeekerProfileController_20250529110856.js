import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'
import sha1 from 'sha1'
import nodemailer from 'nodemailer';
import rand from 'string-random'

let transporter = nodemailer.createTransport({
    host : "smtp-relay.brevo.com",
    port :  587,
    secure : false,
    auth : {
        user : "8e3a1c001@smtp-brevo.com",
        pass : "Js3Irvy9O0HqECka",
    }
})

let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let result = await Seeker.find({_id : obj.id});
            res.send(result);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

let EditSeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.updateMany({_id : id}, req.body);
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

const updatePass = async(req, res)=>{
    if(req.headers.authorization){

        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.find({_id : id });
            if(result[0].password == sha1(req.body.password)){
                await Seeker.updateMany({_id : id}, {password : sha1(req.body.newpass)});
                res.send({success:true, errType : 1})
            }else{
                res.send({success:false, errType : 1})
            }
        }else{

        }


    }else{
        res.send({success:false});
    }
}

let getOtp = async(req,res)=>{
    let username = req.body.username;
    let result = await Seeker.find({email:username});
    if(result.length == 1){

        let mailOpt = {
            from : "farhan.ahmed0621@gmail.com",
            to : "farhan.merndev2121@gmail.com",
            subject : "Hello",
            html : "<h1> hiiiiiiiii</h2>"
        }

        transporter.sendMail(mailOpt, async(err, info)=>{
            if(err){
                console.log("------------", err)
            }
            else{
                console.log(info);
            }
        })

    }else{
        res.send({success:false});
    }
}

export {SeekerProfile,getOtp, EditSeekerProfile, updatePass};