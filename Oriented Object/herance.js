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