import  sqlite3  from "sqlite3";
import { open } from "sqlite";

export async function sqlconection(){
    const db= await open({
        filename:'./src/database/sql.db',
        driver:sqlite3.Database
    })
    return db
}
