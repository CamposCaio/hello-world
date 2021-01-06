// Array is a Object in Javascript

console.log(typeof Array, typeof new Array, typeof [])

let numeros = [1, 2, 3, 4, 5]
numeros.unshift(0) //0, 1, 2, 3, 4, 5
numeros.shift()    //1, 2, 3, 4, 5 
numeros.push(6)    //1, 2, 3, 4, 5, 6
numeros.pop()      //1, 2, 3, 4, 5
numeros.splice(2, 0, 2.5)   //1, 2, 2.5, 3, 4, 5
novoNumeros = numeros.slice(1,4)    //2, 2.5, 3
console.log(numeros, novoNumeros)


// Map: [Array] -> [Array]
// pass each element to a function and returns a new array

const nums = [1, 2, 3, 4, 5]
let dobro = nums.map(function(e) {
    return 2 * e
})

console.log(dobro)  //2, 4, 6, 8, 10


// Filter: [Array] -> [Array]
// pass each element to a function and if true push the element onto the new array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// Example 1
console.log(produtos.filter(function(p) {
    return p.preco > 1000   // if return true then add to new array
}))

// Example 2
const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))


// Reduce [array] -> value
// It's a loop with (accumulator, actual value, actual index, full array)

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)


// Reduce chalange

const todosBolsistas = alunos.map(a => a.bolsista).reduce((previous, current) => previous && current)

const algumBolsista = alunos.map(a => a.bolsista).reduce((previous, current) => previous || current)

console.log(todosBolsistas, algumBolsista)


// Concat

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)

console.log(todos)