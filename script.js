//componentes basicos
let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função para validar numero inserido
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//função para adicionar numero a lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
//função para publicar o numero na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
//função para 
function finalizar() {
    if (valores.length == 0) {S
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O MAIOR valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>A SOMA dos valores é ${soma}. </p>`
        res.innerHTML += `<p>A MEDIA dos valores digitados é ${media}. </p>`
    }
}