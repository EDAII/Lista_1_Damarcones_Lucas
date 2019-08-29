const clientes = require("../pessoas")

const insertionSort = (array) => {
    let length = array.length;
    console.log("length: ", length)

    for (let i = 1, j; i < length; i++) {
        let temp = array[i];
        for (let j = i - 1; j >= 0 && array[j].nome > temp.nome; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }

    return array;
}

const addcliente = () => {
    alert("cliente adicionado")
}
const listar = (id) => {
    let _clientes  = insertionSort(clientes)
    let conteudo =
    `
        <table>
        <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>idade</th>
        </tr> 
    `

    for (const iterator of object) {
        conteudo +=
         `
        <tr>
            <td>"${iterator.nome}"</td>
            <td>"${iterator.cpf}"</td>
            <td>"${iterator.rg}"</td>
            <td>"${iterator.cpf}"</td>
        </tr>
        `
    }

    document.getElementById(id).appendChild(conteudo)


}