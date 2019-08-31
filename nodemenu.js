const nodemenu = require('node-menu')
const { insertionsort, indexsearch, menu , exibirclientes} = require('./function')
const DADOS = require("./pessoas")
const dados = insertionsort(DADOS)
vindex = indexsearch(dados, 10);


const Menu = function () {
    let self = this
    self.A = 'Campo A'
    self.B = 'Campo B'
}

Menu.prototype.A = () => {
    console.log(`Campo A: ${this.A}`)
}
Menu.prototype.B = () => {
    console.log(`Campo B: ${this.B}`)
}

const testMenu = new Menu()

let opcoes = menu()

nodemenu.addDelimiter('-', 60, opcoes[0])

    nodemenu.addItem(
        opcoes[1],
        ()=>{
            exibirclientes(dados)
        })

module.exports = {nodemenu}
