import session from "express-session";
import { sqlconection } from "../database/config/sqlconfig.js";

export class CategoriesControllers {
    async create(req,res){
        const name=req.body.name.toUpperCase();
        console.log(req.session)
        const db= await sqlconection()
        const result= await db.run('INSERT INTO Categories (name) VALUES (?)',[name])
        const newCategoryId =result.lastID
        const newCategory = await db.get('SELECT * FROM Categories WHERE id = ?', [newCategoryId]);
        res.status(201).send(newCategory)

    }
    
}