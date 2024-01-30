import { Router } from "express";

import { SessionController } from "../controller/SessionControllers.js";
const sessionControle= new SessionController()
export const sessionRoute=Router()


sessionRoute.post('/',sessionControle.Login)
sessionRoute.get('/logout',sessionControle.Logout)
