import  express from "express";
import { migrationRun } from "./database/migrations/migrationsRun.js";
import { routes } from "./routes/index.js";
import cors  from "cors";
import session from "express-session";
import  methodOverride  from "method-override";
migrationRun()
const PORT= 3333;
const app= express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cors())
app.use(
        session({
        secret:"ngmvaisaber",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
)
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json())
app.use(routes)
app.listen(PORT,()=>{
console.log(`Server running in http://localhost:${PORT}/views/products`)

})
