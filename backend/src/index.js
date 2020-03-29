const express = require('express');
const routes = require('./routes');
const cors =   require('cors');

/**
 * 
const app = express();

app.use(express.json());
 */

/**
 * ROTAS / RECURSOS
 * www."""""""".com/users
 */

/**
 * Metodos HTTP:
 * 
 * GET: BUSCAR/LISTAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UM INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

 /**
  * TIPOS DE PARAMETROS:
  * 
  * QUERY *params: PARAMETROS NOMEADOS EVIADDOS NA ROTA APOS '?' (FILTROS,PAGINAÇÃO)
  * ROUTE *params: PARAMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS 
  * REQUEST Body: CORPO DA REQUISIÇAO ULTIZADO PARA CRIAR OU ALTERAR RECURSOS
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL,OracleSQL, Microsoft SQL Server
   * NoSQL: MongoDB, ETC
   */
const app = express();

app.use(cors({
   //origin: http://meuapp.com
}));

app.use(express.json());
app.use(routes);

app.listen(3333);
