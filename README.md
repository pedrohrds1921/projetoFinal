
## Documentation

Para executar o projeto é nessario usar 

npm install

e executar 

npm run start



# Api Produtos 

Uma Api capaz de realizar as seguinte funções

- Cadastrar Usuario

- Cadastrar Produtos

- Editar Produtos 

- Listagem de Produtos

## API Reference
End Points da Api sem Views
#### Listagem de Todos os produtos
```http
  GET /products
```

#### Listagem de produtos pelo o id do User
o usuario sera nessario logar para acessar esse rota
```http
  GET /products/filter
```

#### Deletar de produtos pelo o id do produtos
o usuario sera nessario logar para acessar esse rota
e deve ser o criador do produtos para Deletar
```http
  DELETE /products/:id
```



#### Autualizar produtos pelo o id do produtos
o usuario sera nessario logar para acessar esse rota
e deve ser o criador do produtos para Deletar
```http
  PUT /products/:id
```

#### Logar na api 
PASSAR JSON COM email e senha

{"email":"joedhoe@email",
  "password":"1234"
}
```http
  POST /login
```


#### Logar na api 
PASSAR JSON COM email e senha

{"email":"joedhoe@email",
  "password":"1234"
}
```http
  POST /login
```

#### Logout na api 

```http
  get /login/logout
```

#### Criar usuario na api 
PASSAR JSON COM nome email e senha 

{
  "name": "Fulano",
  "email": "fulano@email.com",
  "password": "9876"
}
```http
  POST /users
```


#### Criar produtos na api 
PASSAR JSON COM nome email e senha 
{
  "name": "PRODUTO",
  "stock": 5,
  "category": "CATEGORIA",
  "price": 99.99,
  "description": "Descrição do produto.",
  "placeholderImage": "https://example.com/placeholder-image.png"
}
```http
  POST /products
```

