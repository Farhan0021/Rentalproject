import * as YUP from 'yup'

let PropertySchema = YUP.object({
    tittle : YUP.string().required("Insert Property Name"),
    address : YUP.string().required("Insert Property Address"),
    property_type : YUP.string().required("Select Property Type"),
    rent : YUP.number().typeError("Insert Amount in Numbers").required("Insert Property Rent"),
})

export default PropertySchema