let res = document.getElementById('res')
let array = [22, 17, 15, 12, 4, 8]
let aux = 0

function crescente() {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i]
                array[i] = array[i + 1]
                console.table(array)
                array[i + 1] = aux
                console.table(array)
            }

        }
    }
    res.innerHTML = ''
    res.innerHTML = `O array ordenado de forma crescente (BubbleSort) ${array}`

}
function decrescente() {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                aux = array[i]
                array[i] = array[i + 1]
                console.table(array)
                array[i + 1] = aux
                console.table(array)
            }

        }
    }
    res.innerHTML = ''
    res.innerHTML = `O array ordenado de forma decrescente (BubbleSort) ${array}`
}

function crescenteSelection() {
    let res2 = document.getElementById('res2')
    let numArray = [12, 2, 22, 8, 15]
    let valorAtual;
    for (let i = 0; i < numArray.length - 1; i++) {
        let menor = i
        for (j = i + 1; j < numArray.length; j++) {
            if (numArray[j] < numArray[menor]) {
                menor = j
            }
        }
        if (i != menor) {
            valorAtual = numArray[i]
            numArray[i] = numArray[menor]
            numArray[menor] = valorAtual
        }
    }
    console.table(numArray)
    res2.innerHTML = ``
    res2.innerHTML += `<br>Array ordenado de forma crescente (Selection Sort) = ${numArray}`
}
function decrescenteSelection() {
    let numArray = [12, 2, 22, 8, 15]
    let valorAtual;
    for (let i = 0; i < numArray.length - 1; i++) {
        let maior = i
        for (j = i + 1; j < numArray.length; j++) {
            if (numArray[j] > numArray[maior]) {
                maior = j
            }
        }
        if (i != maior) {
            valorAtual = numArray[i]
            numArray[i] = numArray[maior]
            numArray[maior] = valorAtual
        }
    }
    console.table(numArray)
    res2.innerHTML = ``
    res2.innerHTML += `<br>Array ordenado de forma decrescente (Selection Sort) = ${numArray}`
}
function crescenteInsertion() {
    let res3 = document.getElementById('res3')
    let numArray = [4, 10, 9, 7, 16]
    let valorAtual;
    for (let i = 0; i < numArray.length; i++) {
        let j = i - 1
        valorAtual = numArray[i]
        while (j >= 0 && valorAtual < numArray[j]) {
            numArray[j + 1] = numArray[j]
            j--
        }
        numArray[j + 1] = valorAtual
    }
    console.table(numArray)
    res3.innerHTML = ``
    res3.innerHTML += `<br>Array Ordenado de forma crescente (Insertion Sort) = ${numArray}`
}
function decrescenteInsertion() {
    let numArray = [4, 10, 9, 7, 16]
    let valorAtual;
    for (let i = 0; i < numArray.length; i++) {
        let j = i - 1
        valorAtual = numArray[i]
        while (j >= 0 && valorAtual > numArray[j]) {
            numArray[j + 1] = numArray[j]
            j--
        }
        numArray[j + 1] = valorAtual
    }
    console.table(numArray)
    res3.innerHTML = ``
    res3.innerHTML += `<br>Array Ordenado de forma decrescente (Insertion Sort) = ${numArray}`
}

function exec1() {
    let res4 = document.getElementById('res4')
    let num = [5, 8, 6, 2, 3, 7, 9]
    let n = num.length
    aux = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (num[j] > num[j + 1]) {
                aux = num[j]
                num[j] = num[j + 1]
                num[j + 1] = aux
            }
        }

        console.table(num)
    }
    res4.innerHTML = `Array ordenado ${num}`
}

function exec2() {
    let res5 = document.getElementById('res5')
    let num = [8, 5, 4, 7, 9, 2, 1]
    let n = num.length
    aux = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (num[j] < num[j + 1]) {
                aux = num[j]
                num[j] = num[j + 1]
                num[j + 1] = aux
            }
        }

        console.table(num)
    }
    res5.innerHTML = `Array ordenado ${num}`
}


function random(max, min) {
    valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return valorAleatorio
}
function exec3() {
    let res6 = document.getElementById('res6')
    let num = []
    for (let i = 0; i < 7; i++) {
        num.push(random(20, 1))
    }
    console.table(num)
    aux = []
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[j + 1]) {
                aux = num[j]
                num[j] = num[j + 1]
                num[j + 1] = aux
            }
        }

        console.table(num)
    }
    res6.innerHTML = `Valor ordenado ${num}`

}

function ifElse(){
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)
        if((a == b)&&(a == c)){
            res7.innerHTML = `O triângulo é Equilátero`
        }
        else if((a == b) || (a==c) || (b==c)){
            res7.innerHTML = `O triângulo é Isóscele`
        }else{
            res7.innerHTML = `O triângulo é Escaleno`
        }

}

function forS(){
    let num = Number(document.getElementById('num').value)
    let array = []
    let contador = 0
    for(let i = 0; i < num; i++){
        contador++ 
        array.push(contador)
    }
    res8.innerHTML = array

}

    function fator() {
        let res9 = document.getElementById('res9');
        let fatorial = Number(document.getElementById('fatorial').value);
        let valorFator = 1; 
    
        if (fatorial < 0) {
            res9.innerHTML = "Digite um número não negativo.";
            return;
        }
    
        while (fatorial > 1) {
            valorFator *= fatorial;
            fatorial--;
        }
    
        res9.innerHTML = `O fatorial é: ${valorFator}`;
    }

