
import { compare } from "bcrypt";
import { sqlconection } from "../database/config/sqlconfig.js"
export class SessionController {

    async Login(req,res){
        const { email, password } = req.body
        console.log(email,password)
        const db=await sqlconection()
        const User= await db.get('Select * FROM Users WHERE email= ?',[email])
        console.log(User)
        const passwordCheck= await compare(password,User.password)
        if(!User || !passwordCheck){
           return res.status(401).send("Email ou senha invalido")
        }
        req.session.userId = User.id
        res.status(200).redirect("views/products");
    }
    async Logout(req,res){
        console.log(req.session)
       req.session.destroy(()=>{
        res.status(200).json({ message: 'Logout bem-sucedido!' })
       })
       console.log("depois" + req.session)

    }
}