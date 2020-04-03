const express = require('express')
const cardapioController = require('../controllers/cardapioController');
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public', 'img'))
    },
    filename: function (req, file, cb) {
        let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g, '') + path.extname(file.originalname)
      cb(null, nomeImg)
    }
  })
   
  const upload = multer({ storage: storage })


let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})
//crud cardapio

//read
route.get('/ver', cardapioController.listarCardapio)
//cadastro get e post
route.get('/cadastro', cardapioController.formCadastro)
route.post('/cadastro', upload.any(), cardapioController.salvarCadastro)
//delete
route.delete('/deletar/:posicao', cardapioController.deletarPizza)
//update
route.get('/alterar/:posicao', cardapioController.formAlteracao)
route.put('/alterar/', cardapioController.alterarPizza)

module.exports = route