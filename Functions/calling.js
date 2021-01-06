// 1. Traditional execute
// 2. Call & Apply

const produto = { nome: 'Notebook', preco: 4589, desc: 0.15, getPreco }


// When you use the command 'bind', it doesn't execute a function, but only creates another
// function that uses a new context. It doesn't work with arrow functions!
function onlyGetPreco () { return this.preco }
console.log(onlyGetPreco.bind(produto)()) //{}


// 2. Call & Apply
// You can use a method in a different object
// The difference is how you pass the parameters,
// 'call' uses a list and 'apply' an array.
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
}
console.log(getPreco.call(produto, 0.05, '$'))
console.log(getPreco.apply(produto, [0.1, 'US$']))