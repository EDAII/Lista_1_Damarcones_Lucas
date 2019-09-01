const nodemenu = require('node-menu')
const { insertionsort, menu, exibirclientes, binsearch } = require('./function')
const DB = require("./pessoas")
let dados = insertionsort(DB)

let opcoes = menu()
nodemenu.addDelimiter('-', 60, opcoes[0])
nodemenu.addItem(
    opcoes[1],
    () => {
        exibirclientes(dados)
    })
    .addItem(
        opcoes[2],
        (cpf) => {
            let res = binsearch(dados,cpf)
            if(res === -1)
                console.log("Usuário não encontrada")
            else
                console.log(dados[res])
        }, null,
        [{ 'name': 'cpf', 'type': 'string' }])
    .start()


