import express from 'express';
import { OwnerAut, OwnerAuth } from '../controllers/OwnerAuthController.js';
let routes = express.Router();

routes.post("/", OwnerAuth)

export default routes;