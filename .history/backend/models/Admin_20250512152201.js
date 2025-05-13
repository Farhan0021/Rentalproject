import mongoose from '../config/conn.js'

let SeekerSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String
},{timestamps:true})

let  Seeker= mongoose.model ("seeker", SeekerSchema);

export default Seeker;