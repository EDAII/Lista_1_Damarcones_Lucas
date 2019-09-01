const nodemenu = require('node-menu')
const { insertionsort, indexsearch, menu , exibirclientes, binsearch} = require('./function')
const DADOS = require("./pessoas")
let dados = insertionsort(DADOS)


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
.addItem(
            opcoes[2],
            ()=>{
                let res = binsearch(dados, "123.456.789-00")
                console.log(dados[res] )
            })
            .start()


