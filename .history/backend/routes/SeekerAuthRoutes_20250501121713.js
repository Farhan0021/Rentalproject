import express from 'express'
import { SeekerAuth } from '../controllers/SeekerAuthController';

let routes = express.Router();

routes.post("/",SeekerAuth);

export default routes;
