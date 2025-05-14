import express from 'express';
import { SaveProperty, getAllproperty,getAllPropertyByOwner, getAllPropertyWithOwner } from  '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllproperty);

routes.get("/owner", getAllPropertyByOwner)

routes.get("/withowner", getAllPropertyWithOwner)

export default routes;