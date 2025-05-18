import express from 'express';
import { saveMessage, getAllMsgByPropertyId } from '../controllers/MessageController.js';

let routes = express.Router();

routes.post("/", saveMessage);
routes.get("/getmessages/:pid", getAllMsgByPropertyId)
export default routes;
