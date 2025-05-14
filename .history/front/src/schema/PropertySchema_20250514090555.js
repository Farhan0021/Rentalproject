import * as YUP from 'yup'

let PropertySchema = YUP.object({
    title : YUP.string().required("Insert Property Name"),
    address : YUP.string().required("Insert Property Address"),
    property_type : YUP.string().required("Select Property Type"),
    rent : YUP.string().required("Insert Property Rent"),

    
})