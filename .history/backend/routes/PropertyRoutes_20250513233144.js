import express from 'express';
import { SaveProperty } from  '../controllers/PropertyController';
let routes = express.Router();

routes.post("/", SaveProperty);

export default routes;