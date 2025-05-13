import express from 'express'
import { SeekerProfile } from '../controllers/SeekerProfileController';
import ( SeekerProfile);

let routes = express.Router();

routes.get("/", SeekerProfile);

export default routes;