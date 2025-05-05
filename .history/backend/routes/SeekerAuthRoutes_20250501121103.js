import express from 'express'

let routes = express.Router();

routes.post("/",SeekerAuth)