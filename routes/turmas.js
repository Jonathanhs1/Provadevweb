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

//ROTAS DA TURMA
router.get(
    '/turmaGetbyId/:id', 
(req, res, next)=>
{
    var id = parseInt(req.params.id)
    connection.query('SELECT * from turmas where id_turma = ?',[id], 
    (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
  
});

router.get(
    '/turmasGetAll', 
(req, res, next)=>
{
    connection.query('SELECT * FROM turmas', 
    (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
  
});

router.post(
    '/addturma',
    (req,res) => { 
        var id_turma = req.body.id_turma
        var curso = req.body.curso
        var nome_turma = req.body.nome_turma
        var data_inicio = req.body.data_inicio
        connection.query('insert into turmas(id_turma, nome_turma, curso, data_inicio) values(?, ?, ?, ?)',[id_turma, nome_turma, curso, data_inicio],
             (resultado,error) => {
                  if(error) res.send(error);
                 else res.send(resultado);
             }
         )
        }
    )


router.patch(
     '/upturma/:id',
    (req,res) => { 
        var id_turma = parseInt(req.params.id_turma)
        var nome_turma = req.body.nome_turma
        var curso = req.body.curso
        var data_inicio = req.body.data_inicio
        connection.query('update turmas set  id_turma = ?, nome_turma = ?,curso = ?, data_inicio = ?  where id_aluno = ?',[id_turma,nome_turma, curso,data_inicio,id_turma],
                (resultado,error) => {
                  if(error) res.send(error);
                 else res.send(resultado)
                 }
              )   
         }
    )
    
router.delete(
        '/delturma/:id',
        (req,res) => { 
            var id = parseInt(req.params.id)
            connection.query('delete from turmas where id_turma = ?',[id],
                 (resultado,error) => {
                    if(error) res.send(error);
                     else res.send(resultado)
                     }
                )   
            }
    )
module.exports = router;
