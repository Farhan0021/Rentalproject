import express from 'express';
import { OwnerAut, OwnerAuth } from '../controllers/OwnerAuthController';
let routes = express.Router();

routes.post("/", OwnerAuth)