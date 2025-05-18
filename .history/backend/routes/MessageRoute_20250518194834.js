// import express from 'express';

// import { saveMessage
//  } from '../controllers/MessageController';
//  let routes = express.Router();

//  routes.post("/", saveMessage);

//  export default routes;

import express from 'express';
import { saveMessage } from '../controllers/MessageController.js';

let routes = express.Router();

routes.post("/", saveMessage);
routes.get("/getmessages/:id")
export default routes;
