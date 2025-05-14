import Prop from '../models/Property.js'
let SaveProperty = async(req, res)=>{
    if(req.headers.authorixation){

    }
    else{
        res.send({success:false});
    }
}

export { SaveProperty}