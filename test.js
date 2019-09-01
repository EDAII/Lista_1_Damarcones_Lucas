const { insertionsort, indexsearch, menu , binsearch, buscaindex} = require('./function')
const DADOS = require("./pessoas")
const dados = insertionsort(DADOS)
vindex = indexsearch(dados, 10);
if(dados[1].cpf === "042.682.896-82")
    console.log("ok")
let res = binsearch(dados,"042.682.896-82")
console.log(dados[res])
// buscaindex(vindex,dados, "123.456.789-00")
