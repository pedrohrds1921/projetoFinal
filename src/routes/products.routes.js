import { Router } from "express";
import { auth } from "../middleware/authverify.js";
import { ProductsControllers } from "../controller/ProductsControllers.js";

export const productsRoute=Router()
const productsControlle=new ProductsControllers()


productsRoute.post("/",auth,productsControlle.create)
productsRoute.delete("/:id",auth,productsControlle.delete)
productsRoute.get("/",productsControlle.index)
productsRoute.get("/filter",auth,productsControlle.filterById)
productsRoute.get("/pricemin",auth,productsControlle.filter)
productsRoute.put("/update/:id",auth,productsControlle.updade)



