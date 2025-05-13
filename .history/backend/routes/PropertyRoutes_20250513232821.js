import express from 'express';
let routes = express.Router();

routes.post("/", SaveProperty);

export default routes;