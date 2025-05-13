import express from 'express';

let routes = express.Router();

routes.get("/", OwnerProfile);