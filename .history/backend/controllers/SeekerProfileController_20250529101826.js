import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'
import sha1 from 'sha1';

import brevo from '@getbrevo/brevo';
let defaultClient = brevo.ApiClient.instance;
let apiKey = defaultClient.authentications['api_key'];
apiKey.apiKey = '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';

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
    let result = await Seeker.find({username:username});
    if(result.length == 1){

        let apiInstance = new brevo.TransactionalEmailsApi();
let sendSmtpEmail = new brevo.SendSmtpEmail();

sendSmtpEmail.subject = "Hello";
sendSmtpEmail.htmlContent = "<html><body><h1>Common: This is my first transactional email </h1></body></html>";
sendSmtpEmail.sender = { "name": "Mohd Farhan", "email": "farhan.ahmed0621.com" };
sendSmtpEmail.to = [ 
  { "email": "farhan.merndev2121@gmail.com", "name": "Farhan Ahmed" }
];

// sendSmtpEmail.replyTo = { "email": "brevo@brevo.com", "name": "John" };

sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };
sendSmtpEmail.messageVersions = [{
    "to": [
      {
        "email": "brevo@brevo.com",
        "name": "John"
      }
    ],
    "headers": {
      "Message-Id": "<123.123@smtp-relay.mailin.fr>"
    },
    "params": {
      "greeting": "Welcome onboard!",
      "headline": "Be Ready for Takeoff."
    },
    "subject": "+001",
    "htmlContent": "<html><body><h1>+001 content</h1></body></html>"
  },
  {
    "to": [
      {
        "email": "brevo@brevo.com",
        "name": "Steve"
      }
    ],
    "params": {
      "greeting": "Greeting 1.",
      "headline": "Some bathing suits you might like"
    },
    "subject": "+002"
}];

apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function (error) {
  console.error(error);
});

    }else{
        res.send({success:false});
    }
}

export {SeekerProfile,getOtp, EditSeekerProfile, updatePass};