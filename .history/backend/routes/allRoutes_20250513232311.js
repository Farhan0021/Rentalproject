import express from 'express';
import OwnerRoutes from './OwnerRoutes.js'
import SeekerRoutes from './SeekerRoutes.js'
import SeekerAuthRoutes from './SeekerAuthRoutes.js'
import OwnerAuthRoute from './OwnerAuthRoute.js'
import AdminAuthRoute from './AminAuthRoute.js'
import OwnerProfileRoute from './OwnerProfileRoutes.js'
import SeekerProfileRoute from './SeekerProfileRoutes.js'
import PropertyRoute from './PropertyRoutes.js'

let routes = express.Router();



routes.use("/api/v1/owner",OwnerRoutes);
routes.use("/api/v1/seeker",SeekerRoutes);
routes.use("/api/v1/seekerauth",SeekerAuthRoutes);
routes.use("/api/v1/ownerauth",OwnerAuthRoute);
routes.use("/api/v1/adminauth", AdminAuthRoute);
routes.use("/api/v1/ownerprofile", OwnerProfileRoute);
routes.use("/api/v1/seekerprofile", SeekerProfileRoute);


export default routes;