const PESSOAS = require('./pessoas')
const {insertionsort, indexsearch, menu} = require('./function')


menu()

const dados = insertionsort(PESSOAS)
vindex = indexsearch(dados, 10);
