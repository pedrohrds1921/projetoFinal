import { Router } from "express";
import { ViewsControllers } from "../controller/ViewsControllers.js";
import { auth } from "../middleware/authverify.js";
const viewsControler= new ViewsControllers

export const viewsRoute= Router()


viewsRoute.get('/login',viewsControler.viewLogin)
viewsRoute.get('/createProducts',viewsControler.createViewProcducts)
viewsRoute.get('/products',viewsControler.viewProducts)
viewsRoute.get('/products/updade/:id',viewsControler.viewUpdadeProducts)
viewsRoute.get('/myProducts',auth,viewsControler.viewMyProducts)
viewsRoute.get('/:categorie',viewsControler.viewFilter)