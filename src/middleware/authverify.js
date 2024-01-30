export function auth(req,res,next){
console.log(req.session )
    if (!req.session || req.session.userId === undefined){
       res.status(401).redirect('/views/login')
      
    }else{
        next() 
    }
}