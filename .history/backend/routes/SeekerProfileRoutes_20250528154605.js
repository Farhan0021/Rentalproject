import express from 'express'
import { SeekerProfile, EditSeekerProfile } from '../controllers/SeekerProfileController.js';


let routes = express.Router();

routes.get("/", SeekerProfile);
routes.put("/", EditSeekerProfile)
routes.post("/updatepass", updatePass)

export default routes;