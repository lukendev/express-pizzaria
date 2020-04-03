const fs = require('fs')
const path = require('path')

const meuArquivo = path.join('texto.json')

let conteudo = fs.readFileSync(meuArquivo, {
    encoding:'utf-8'
})
conteudo = JSON.parse(conteudo)

conteudo.push('melão')

fs.writeFileSync(meuArquivo, JSON.stringify(conteudo))