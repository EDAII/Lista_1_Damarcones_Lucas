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
    // console.log(vet)
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

const customMenu = () => {
    let menu = "\n"
    menu += ("    _____                         _       _____            \n")
    menu += ("    /  __ \                       | |     /  ___|          \n")
    menu += ("    | /  \/ ___ _ __ _ __ __ _  __| | ___ \ `--.  ___  __ _\n")
    menu += ("    | |    / _ \ '__| '__/ _` |/ _` |/ _ \ `--. \/ _ \/ _` \n|")
    menu += ("    | \__/\  __/ |  | | | (_| | (_| | (_) /\__/ /  __/ (_| \n|")
    menu += ("     \____/\___|_|  |_|  \__,_|\__,_|\___/\____/ \___|\__, \n|")
    menu += ("                                                       __/ \n|")
    menu += ("                                                      |___/\n")
    return menu
}


const exibirclientes = (vet) => {
    for (let index = 0; index < vet.length; index++) {
        console.log(`[${index + 1}] - CPF: ${vet[index].cpf}`)

    }
}
const binsearch = function (arr, x) {

    let start = 0, end = arr.length - 1;

    // Iterate while start not meets end 
    while (start <= end) {

        // Find the mid index 
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True 
        if (arr[mid].cpf == x) return mid;

        // Else look in left or right half accordingly 
        else if (arr[mid].cpf < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return -1;

}

const deletebycpf = (dados, cpf) => {
    let pos = binsearch(dados, cpf);
    if (pos === -1)
        return -1
    else {
        delete dados[pos]
        dados[pos] = { cpf: "" }
        return 1
    }
}

const buscaindex = (index, vet, key) => {
    // console.log(index)
    // console.log(vet)
    // console.log(key)
    for (let i = 0; i < index.length - 1; i++) {
        if (index[i].cpf >= key && key <= index[i + 1].cpf) {
            for (let j = index[i].pos; j < index[i + 1].pos; j++)
                if (vet[j].cpf == key) {
                    console.log(`NOME: ${vet[j].nome}, IDADE: ${vet[j].idade},CPF:${vet[j].cpf} , RG:${vet[j].rg}`)
                    break
                }
        }

    }
}
const fun = () => {
    for (let i = 0; i < dados.length; i++) {
        acesso[i] = Math.floor(Math.random() * 100)
        console.log(`Acessos: ${acesso[i]}, [${i + 1}] -CPF: ${dados[i].cpf}, Nome: ${dados[i].nome}`)
    }
}


module.exports = {
    indexsearch, insertionsort, fun,
    menu, exibirclientes,
    customMenu, binsearch,
    deletebycpf
}