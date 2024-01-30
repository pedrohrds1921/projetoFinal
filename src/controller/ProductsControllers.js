import { sqlconection } from "../database/config/sqlconfig.js";

export class ProductsControllers{
    async create (req,res){
        const { name,
            stock,
            Categorie,
            price,
            description,
            PlaceHolderImage}=req.body
            console.log(name,
                stock,
                Categorie,
                price,
                description,
                PlaceHolderImage)
        const id_user= req.session.userId
        const db= await sqlconection()
        const result = await db.run('INSERT INTO produtos(name,stock,Categorie,id_user,price,description,PlaceHolderImage) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [   name,
            stock,
            Categorie,
            id_user,
            price,
            description,
            PlaceHolderImage
        ])
        const newProductId =result.lastID
        const newProduct = await db.get('SELECT * FROM produtos WHERE id = ?', [newProductId]);
        res.status(201).redirect('/views/products')   
    }
    async index(req,res){
        const db= await sqlconection()

        const allProducts= await db.all('SELECT * FROM produtos')
        
        res.status(200).send(allProducts)
    }
    async filterById(req,res){
        const {userId}=req.session

        const db= await sqlconection()

        const allProducts= await db.all('SELECT * FROM produtos Where id_user=?',[userId])
        res.status(200).send(allProducts)
    }
     async filter(req,res){
        const {userId}=req.session
        const db= await sqlconection()
        const priceMin= await db.all('SELECT * FROM produtos ORDER BY produtos.price ASC')
        res.status(200).send(priceMin)
    }
    async updade(req,res)
    {
        const {userId}=req.session
        const {id}=req.params
        const { name,
            stock,
            Categorie,
            price,
            description,
            PlaceHolderImage}=req.body
            const db= await sqlconection()
            const product= await db.get('SELECT * FROM produtos Where id=?',[id])
            if(product.id_user!=userId){
               return res.send(`<script>
                alert("Usuario não permitido pra editar esse produto");
                window.location.href="/views/products";
                </script>`)
            }
            const result = await db.run
            (`
                UPDATE produtos 
                SET name = COALESCE(?, name),
                stock = COALESCE(?, stock),
                Categorie = COALESCE(?, Categorie),
                id_user= COALESCE(?, id_user),
                price = COALESCE(?, price),
                description = COALESCE(?, description),
                PlaceHolderImage = COALESCE(?, PlaceHolderImage)
                WHERE id = ?
                `,
                [ name,
                stock,
                Categorie,
                product.id_user,
                price,
                description,
                PlaceHolderImage,
                product.id
                ]
            )
            const productUpdatade= await db.get('SELECT * FROM produtos Where id=?',[product.id])
            res.status(200).send(`<script>
            alert("Produto Editado");
            window.location.href="http://localhost:3333/views/products";
            </script>`)
    }
    async delete(req,res){
            const {userId}=req.session
            const {id}=req.params
            const db= await sqlconection()
            const product= await db.get('SELECT * FROM produtos Where id=?',[id])
            if(product.id_user!=userId){
                res.send(`<script>
                alert("Usuario não permitido pra excluir esse produto");
                window.location.href="http://localhost:3333/views/products";
                </script>`)
            }
            const productdeleted= await db.get('DELETE FROM produtos WHERE id = ?',[id])
            res.status(200).send(`	<script>
            alert("Produto deletado");
            window.location.href = "views/products";
            </script>`)
            
        }
}
