const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/curriculo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static(__dirname + "/../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/Curriculo', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Curriculo ORDER BY Nome COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereCurriculo', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  sql =
    "INSERT INTO Curriculo (Nome, cargo, endereco, telefone, email) VALUES ('" +
    req.body.nome +
    "', '" +
    req.body.cargo +
    "', '" +
    req.body.endereco +
    "', " +
    req.body.telefone +
    ", '" +
    req.body.email +
    "')";
  console.log(sql);
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  res.write('<p>CURRICULO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close(); // Fecha o banco
  res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaCurriculo', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql = "SELECT * FROM Curriculo WHERE id=" + req.query.id;
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaCurriculo', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql =
    "UPDATE Curriculo SET Nome='" +
    req.body.nome +
    "', cargo = '" +
    req.body.cargo +
    "', endereco='" +
    req.body.endereco +
    "', telefone=" +
    req.body.telefone +
    ", email='" +
    req.body.email +
    "'";
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
    if (err) {
        throw err;
    }
    res.end();
  });
  res.write('<p>Curriculo atualizado com sucesso!</p><a href="/">Voltar</a>');
  db.close(); // Fecha o banco
});

app.get('/removeCurriculo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Curriculo WHERE id='" + req.query.id + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });