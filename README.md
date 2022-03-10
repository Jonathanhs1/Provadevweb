# Provadevweb
Prova 2 dev. Web CRUD
Lembre-se de criar um banco de dados e executar o seguinte codigo

CREATE TABLE Turmas(
id_turma int AUTO_INCREMENT,
nome_turma varchar(15) NOT NULL,
curso varchar(20) NOT NULL,
data_inicio date,
primary key (id_turma)
);

CREATE TABLE Alunos(
id_aluno int AUTO_INCREMENT,
id_turma int,
nome_aluno varchar(50),
data_matricula date,
primary key (id_aluno),
FOREIGN KEY ( `id_turma` ) REFERENCES `Turmas` ( `id_turma`));
