BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Formacao" (
	"curso"	TEXT,
	"ano_inicio"	INTEGER,
	"ano_fim"	INTEGER,
	"descricao"	TEXT,
	"curriculo_id"	INTEGER,
	FOREIGN KEY("curriculo_id") REFERENCES "Curriculo"("id"),
	PRIMARY KEY("curriculo_id")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"habilidade"	TEXT NOT NULL,
	"nivel"	INTEGER NOT NULL,
	"curriculo_id"	INTEGER,
	PRIMARY KEY("curriculo_id")
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"nome_da_empresa"	TEXT,
	"ano_inicio"	INTEGER,
	"ano_fim"	INTEGER,
	"cargo"	TEXT,
	"descricao"	INTEGER,
	"curriculo_id"	INTEGER,
	FOREIGN KEY("curriculo_id") REFERENCES "Curriculo"("id"),
	PRIMARY KEY("curriculo_id")
);
CREATE TABLE IF NOT EXISTS "Curriculo" (
	"id"	INTEGER NOT NULL UNIQUE,
	"Nome"	TEXT,
	"cargo"	TEXT,
	"endereco"	TEXT,
	"telefone"	INTEGER,
	"email"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Personalidade" (
	"personalidade"	TEXT,
	"nivel"	INTEGER,
	"curriculo_id"	INTEGER,
	PRIMARY KEY("curriculo_id")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"realizacao"	TEXT,
	"ano"	INTEGER,
	"descricao"	TEXT,
	"curriculo_id"	INTEGER,
	PRIMARY KEY("curriculo_id")
);
INSERT INTO "Habilidades" VALUES ('GDScript',3,1);
INSERT INTO "Habilidades" VALUES ('',0,2);
INSERT INTO "Experiencia" VALUES ('Sto Americo',2009,2022,'Estudante','Estudei la',1);
INSERT INTO "Curriculo" VALUES (1,'Baldo','baldo','baldo',999,'baldo');
INSERT INTO "Personalidade" VALUES ('feliz',4,1);
INSERT INTO "Realizacoes" VALUES ('entrar no inteli',2022,'entrei',1);
COMMIT;
