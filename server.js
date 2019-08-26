// const fs = require('fs');
// let obj = await JSON.parse(fs.readFileSync('pessoas2.json', 'utf8'));
let obj = require('./pessoas')

// console.log(obj)
function insertionSort(array) {
  let length = array.length;
   console.log("length: ",length)
  
  for(let i = 1, j; i < length; i++) {
    let temp = array[i];
    for(let j = i - 1; j >= 0 && array[j].cpf > temp.cpf; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}

let vet = insertionSort(obj)
for(let i = 0; i <vet.length ;i++)
console.log(vet[i].cpf)

