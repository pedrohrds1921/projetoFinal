import { Router } from "express";
import { UserControllers } from "../controller/UserControllers.js";
export const userRoutes=Router()
const userController= new UserControllers()


userRoutes.post('/',userController.create)
