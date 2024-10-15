let res = document.getElementById('res')
let array = [22, 17, 15, 12, 4, 8]
let aux=0

function crescente(){
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
    res.innerHTML = `O array ordenado em ordem crescente ficou ${array}`

}
function decrescente(){
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
    res.innerHTML = `O array ordenado em ordem decrescente ficou ${array}`
}

function mostrar(){
    let codigo = document.getElementById('codigoCss')
    codigo.style.display = codigo.style.display === 'none' ? 'block' : 'none';
    codigo.style.borderLeft = 'solid'
     codigo.style.borderColor = '#146388'
      

}

