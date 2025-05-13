import express from 'express'

let routes = express.Router();

routes.get("/", SeekerProfile);

export default routes;