import express from 'express';
import { SaveProperty } from  '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllproperty);

export default routes;