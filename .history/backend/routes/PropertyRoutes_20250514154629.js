import express from 'express';
import { SaveProperty, getAllproperty } from  '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllproperty);

routes.get("/owner")

export default routes;