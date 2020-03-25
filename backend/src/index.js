const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP :
 * GET: Buscar/listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend 
 */
/**
 * Tipos de Parâmetros:
 * 
 * Query Params: São parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utlizado para criar ou alterar recursos
 */

 /**
  * SQL, SQLite, Postgres, Microsoft SQL Server, Oracle
  * NoSQL, MongoDB, CouchDB, etc...
  */
 /**
  * Driver: SELECT * FROM users 
  * Query Builder: table('users').select('*').where()
  * 
  */
  

app.listen(3333);