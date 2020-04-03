const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza})
    },
    formCadastro: (req, res) => {
        res.render('cadastroCardapio')
    },
    salvarCadastro: (req,res) => {
        const { nomePizza, precoPizza } = req.body
        const [fotoPizza] = req.files

        Cardapio.cadastrarPizza(nomePizza, precoPizza, fotoPizza.filename)


        res.redirect('/cardapio/ver')
    },
    deletarPizza: (req, res) => {
        let { posicao } = req.params
        Cardapio.deletarPizza(posicao)
        res.redirect('/cardapio/ver')
    },
    formAlteracao:(req, res) => {
        const {posicao} = req.params
        const pizza = Cardapio.buscarPizza(posicao)
        return res.render('alterarCardapio', {pizza, posicao})
    },
    alterarPizza:(req,res) => {
        let {nomePizza, precoPizza, posicao} = req.body

        let pizza = Cardapio.atualizarPizza(nomePizza, precoPizza, posicao)
        
        return res.render('alterarCardapio', {
            pizza, posicao, msg:'Pizza atualizada com sucesso!'
        })
    }

}
 
module.exports = cardapioController