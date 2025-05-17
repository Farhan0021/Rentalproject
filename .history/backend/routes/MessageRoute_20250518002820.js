import express from 'express';
import MessageController from '../controllers/MessageController.js';

import { saveMessage
 } from '../controllers/MessageController';
 let routes = express.Router();

 routes.post("/", saveMessage);

 export default routes;