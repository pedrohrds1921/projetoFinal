import { sqlconection } from "../database/config/sqlconfig.js";

export class ViewsControllers{

    async createViewProcducts(req,res){
        const db= await sqlconection()
        const allCategories= await db.all('SELECT * FROM Categories')
        res.status(200).render('cadastrar.ejs',{allCategories})
    }
    viewLogin(req,res){
        res.status(200).render('login.ejs')
    }
    async viewProducts(req,res){
        const db= await sqlconection()
        const allProducts= await db.all('SELECT * FROM produtos')
        const allCategories= await db.all('SELECT * FROM Categories')
        res.status(200).render('products.ejs',{allProducts,allCategories})
    }
    async viewUpdadeProducts(req,res){
        const {id}=req.params
        const db= await sqlconection()
        const item= await db.get('SELECT * FROM produtos Where id=?',[id])
        const allCategories= await db.all('SELECT * FROM Categories')
        res.status(200).render('atualizar.ejs',{item,allCategories})
    }
    async viewMyProducts(req,res){
        const {userId}=req.session

        const db= await sqlconection()

        const allProducts= await db.all('SELECT * FROM produtos Where id_user=?',[userId])
        const allCategories= await db.all('SELECT * FROM Categories')
        res.status(200).render('products.ejs',{allProducts,allCategories})
    }
    async viewFilter(req,res){
        const {categorie}=req.params
        console.log(categorie)
        const db= await sqlconection()
        const allProducts= await db.all('SELECT * FROM produtos Where Categorie = ?',[categorie])
        const allCategories= await db.all('SELECT * FROM Categories')
        res.status(200).render('categorie.ejs',{allProducts,categorie,allCategories})
    }


}

