const { insertionsort, indexsearch, menu , exibirclientes, buscaindex} = require('./function')
const DADOS = require("./pessoas")
const dados = insertionsort(DADOS)
vindex = indexsearch(dados, 10);


buscaindex(vindex,dados, "123.456.789-00")
