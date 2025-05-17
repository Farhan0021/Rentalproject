import express from 'express';
import { saveMessage
 } from '../controllers/MessageController';
 let routes = express.Router();

 routes.post("/", saveMessage);

 export default routes;