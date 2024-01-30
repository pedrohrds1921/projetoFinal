import { sqlconection } from "../database/config/sqlconfig.js";

import { hash} from "bcrypt";
export class UserControllers{
    async create(req,res){
        const {name,email,password}=req.body
        const db=await sqlconection()
        if(!name || !email || !password){
            res.status(401).send("Dados invalidados")
        }
        const User= await db.get('Select * FROM Users WHERE email= ?',[email])
        if(User){
           return res.status(401).send('Email ja esta em uso!')
        }
        const hashPassword= await hash(password,10)
        const userCreate= await db.run(
            "INSERT INTO users (name,email,password) VALUES(?,?,?)",[name,email,hashPassword]
        )
        res.status(201).send(userCreate)

    }

}