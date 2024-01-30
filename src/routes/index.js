import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { sessionRoute } from "./session.routes.js";
import { categoryRouter } from "./categories.routes.js";
import { productsRoute } from "./products.routes.js";
import { viewsRoute } from "./views.routes.js";
export const routes= Router()

routes.use('/login',sessionRoute)
routes.use('/users',userRoutes)
routes.use('/categories',categoryRouter)
routes.use('/products',productsRoute)
routes.use('/views',viewsRoute)
