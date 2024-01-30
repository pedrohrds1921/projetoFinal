import { Router } from "express";
import { CategoriesControllers } from "../controller/CategoriesControllers.js";
import { auth } from "../middleware/authverify.js";
export const categoryRouter= Router()
const categoriesController= new CategoriesControllers()

categoryRouter.use(auth)
categoryRouter.post("/",categoriesController.create)
