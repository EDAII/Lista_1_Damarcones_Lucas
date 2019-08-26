const PESSOAS = require('./pessoas')


const insertionsort = (data) => {
  let array = data
  let i, j, aux, n = array.length;
  for (i = 1; i < n; i++) {
    j = i;
    while ((j != 0) && (array[j].cpf < array[j - 1].cpf)) {
      aux = array[j];
      array[j] = array[j - 1];
      array[j - 1] = aux;
      j--;
    }

  }
  return array;
}

const dados = insertionsort(PESSOAS)

var acesso = [];
for (let i = 0; i < dados.length; i++){
  acesso[i] = Math.floor(Math.random() * 100)
  console.log(`Acessos: ${acesso[i]}, [${i + 1}] -CPF: ${dados[i].cpf}, Nome: ${dados[i].nome}`)
}
//Testando a atribuição de acessos para cada pessoa
 console.log(`Acessos: ${acesso[1]}, [${2}] -CPF: ${dados[1].cpf}, Nome: ${dados[1].nome}`)
