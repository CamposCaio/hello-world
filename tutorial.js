// IIFE -> Immediately Invoked Function Expression
(function () {
    console.log('Executed out of abrangent scope')
})()


// Declaring Variables

var a = 3 //avoid using 'var'
let b = 4
const c = 5

var a = 30
b = 40


console.log(Number.isInteger(c))    //true
console.log(c.toString(2))          //binary: 101
console.log(typeof c)               //number

console.log("-----")
console.log(7/0)                    //Infinity
console.log("5"/2)                  //2.5
console.log(0.1 + 0.7)              //0.7999...


// Variable Function        *'this' depends where it is called
// function.bind(scope) defines 'this'
const printSum = function (a, b = 1) {
    console.log(a + b)
}

printSum(5)                 //6


// Arrow Function           *'this' defined with function
const Sum = (a, b) => {
    return a + b
}

console.log(Sum(2, 2))      //4


// Arrow + implicit return
const Sub = (a, b) => a - b

console.log(Sub(2, 1))      //1


// Destructuring

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade:i, endereco:{numero}} = pessoa

console.log(nome, i, numero)      //Ana 5


// Ternary

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))


// CallBack

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
fabricantes.forEach(console.log)


// Factory Function

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.99))


// Class

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Caio')
p1.falar()


// Factory Arrow Function

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Eduardo')
p2.falar()


// Call & Apply

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco.call(produto, 0.05, '$'))
console.log(getPreco.apply(produto, [0.1, 'US$']))


//  Oriented Object

const ii = 1, jj = 2
const obj1 = {
    ii, jj,
    funcao1(){
        // ... 
    }
}
console.log(typeof obj1)    //object
console.log(Object.entries(obj1)) //keys, values

// JSON to Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)


// Getters & Setters

const sequence = {
    _valor: 10,    //private variable convenction
    get valor() { return this._valor-- },
    set valor(valor) {
        if (valor > this._valor)
            this._valor = valor
    }
}

sequence.valor = 100
console.log(sequence.valor, sequence.valor)


// Prototype chain

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {attr3: 'C'}
Object.setPrototypeOf(filho, pai)
const filha = Object.create(pai, {
    attr1: {value: 'AA', writable: false, enumerable: true},
    attr3: {value: 'C', writable: false, enumerable: true}
})

console.log(filho.attr1, filha.attr1)

for (let key in filha) {
    filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}


// 'new' equivalent

function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    // Object.setPrototypeOf(obj, f.prototype)
    f.apply(obj, params)
    return obj
}

const aula1 = novo(Aula, 'Bem vindo', 123)
console.log(aula1)


// Prevent modifications

// Extensions

const produtoA = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promo'
})
console.log('Extensível: ', Object.isExtensible(produtoA));

produtoA.nome = 'Borracha'
produtoA.descricao = 'Borracha escolar branca'  //doesn't work
delete produtoA.tag
console.log(produtoA)

// Seal

const pessoaA = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoaA)
console.log('Selado: ', Object.isSealed(pessoaA))

pessoaA.sobrenome = 'Silva' //doesn't work
delete pessoaA.nome //doesn't work
pessoaA.idade = 29
console.log(pessoaA)

// Freeze = seal + constant values