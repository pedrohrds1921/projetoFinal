import { createCategories,createProducts,createUsers } from "./schemas.js";
import { sqlconection } from "../config/sqlconfig.js";


export async function migrationRun(){
    const schemas =[createCategories,createProducts,createUsers].join('')
    const db = await sqlconection()

    db.exec(schemas)
}

