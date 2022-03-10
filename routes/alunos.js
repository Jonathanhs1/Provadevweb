var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port : '3306',
  user     : 'root',
  password : 'root',
  database : 'provaddevweb'
});
 
connection.connect();

/* GET users listing. */
// ALUNOS
router.get(
    '/alunosGetAll', 
(req, res, next)=>
{
    connection.query('SELECT * FROM alunos', 
    (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
  
});

router.get(
    '/alunoGetbyId/:id', 
(req, res, next)=>
{
    var id = parseInt(req.params.id)
    connection.query('SELECT * from alunos where id_aluno = ?',[id], 
    (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
  
});



router.post(
'/addaluno',
(req,res) => { 
    var id_aluno = req.body.id_aluno
    var id_turma = req.body.id_turma
    var nome_aluno = req.body.nome_aluno
    var data_matricula = req.body.data_matricula
    connection.query('insert into alunos(id_aluno,id_turma,nome_aluno,data_matricula) values(?, ?, ?, ?)',[id_aluno,id_turma,nome_aluno,data_matricula],
         (resultado,error) => {
              if(error) res.send(error);
             else res.send(resultado);
         }
        )
    }
)
router.patch(
    '/upaluno/:id',
    (req,res) => { 
        var id_aluno = parseInt(req.params.id_aluno)
        var id_turma = req.body.id_turma
        var nome_aluno = req.body.nome_aluno
        var data_matricula = req.body.data_matricula
        connection.query('update alunos set id_aluno = ?, id_turma = ?, nome_aluno = ?, data_matricula = ?  where id_aluno = ?',[id_aluno,id_turma,nome_aluno,data_matricula, Description,id_aluno],
             (resultado,error) => {
                  if(error) res.send(error);
                 else res.send(resultado)
                 }
            )   
        }
)

router.delete(
    '/delaluno/:id',
    (req,res) => { 
        var id_aluno = parseInt(req.params.id_aluno)
        connection.query('delete from alunos where id_aluno = ?',[id_aluno],
             (resultado,error) => {
                  if(error) res.send(error);
                 else res.send(resultado)
                 }
            )   
        }
)
module.exports = router;
