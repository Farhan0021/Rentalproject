import express from 'express';
import { SaveProperty, getAllproperty,getAllPropertyByOwner } from  '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllproperty);

routes.get("/owner", getAllPropertyByOwner)

export default routes;