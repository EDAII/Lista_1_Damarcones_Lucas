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
const addend = (data, info) => {
    data.push(info)
    return insertionsort(data)
}

const indexsearch = (data, mod) => {
    const LEN = data.length
    let index = 0, i = 0, vet = []
    for (index = 0, i = 0; index < LEN - 1; index += mod) {
        vet.push({
            pos: index,
            cpf: data[index].cpf
        })
    }
    vet.push({
        pos: LEN - 1,
        cpf: data[LEN - 1].cpf
    })
    return vet;
}

const menu = () => {
    let obj = []
    obj.push("Bem-vindo ao Cerrado Seguros");
    obj.push("Exibir clientes")
    obj.push("Buscar segurado")
    obj.push("Remover segurado")
    obj.push("Cadastrar novo segurado")

    return obj
}
const exibirclientes = (vet) => {
    for (let index = 0; index < vet.length; index++) {
        console.log(`[${index + 1}] - CPF: ${vet[index].cpf}`)

    }
}
const binarysearch = function (arr, x) {

    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid].cpf == x) return mid;
        else if (arr[mid].cpf < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return -1;

}
const seqsentinelasearch = function (arr, x) {
    const len = arr.length
    arr[len].cpf = "999.999.999-99"
    let i 
    for ( i = 0; x != arr[len].cpf; i++);
    if(i <= len ) return i
    return -1

}
const rmnull = (data) => {
    let newdata = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].cpf !== "")
            newdata.push(data[i])
    }
    return newdata
}

const deletebycpf = (dados, cpf) => {
    let pos = binarysearch(dados, cpf);
    if (pos === -1)
        return -1
    else {
        delete dados[pos]
        dados[pos] = { cpf: "" }
        return 1
    }
}


module.exports = {
    indexsearch, insertionsort,
    menu, exibirclientes, binarysearch,
    deletebycpf, addend, rmnull,
    seqsentinelasearch
}