const createUsers = `
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR
);
`

// createCategories
const createCategories = `
CREATE TABLE IF NOT EXISTS Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR UNIQUE
);
`

// createProducts
const createProducts = `
CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    stock INTEGER,
    Categorie INTEGER,
    id_user INTEGER,
    price REAL,
    description TEXT, 
    PlaceHolderImage TEXT,
    FOREIGN KEY (Categorie) REFERENCES Categories (id),
    FOREIGN KEY (id_user) REFERENCES Users (id)
);
`

export{createCategories,createProducts,createUsers}