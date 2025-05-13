import mongoose from '../config/conn.js'

let PropSchema = mongoose.Schema({
    owner_id : { ref : "owner", type : mongoose.Schema.Types.ObjectId},
    tittle : String,
    address : String,
    property_type : String,
    rent : Number,
    image : String,
    deposite : Number,
    amenity : []
},{timestamps : true})

let Prop = mongoose.model("property")