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

const indexsearch = (data, mod) => {
    const LEN = data.length
    console.log(LEN)
    let index = 0, i = 0, vet = []
    for (index = 0, i = 0; index < LEN - 1; index += mod) {
        vet.push({
            i: index,
            cpf: data[index].cpf
        })
    }
    vet.push({
        i: LEN - 1,
        cpf: data[LEN - 1].cpf
    })
    console.log(vet)
    return vet;
}

const verifyindex = (index, info) => {

}
const fun = () => {
    for (let i = 0; i < dados.length; i++) {
        acesso[i] = Math.floor(Math.random() * 100)
        console.log(`Acessos: ${acesso[i]}, [${i + 1}] -CPF: ${dados[i].cpf}, Nome: ${dados[i].nome}`)
    }
}


module.exports = { indexsearch, insertionsort, fun }