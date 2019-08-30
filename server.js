const PESSOAS = require('./pessoas')
const {insertionsort, indexsearch} = require('./function')




const dados = insertionsort(PESSOAS)
vindex = indexsearch(dados, 10);
