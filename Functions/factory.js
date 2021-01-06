// The factory function is like a 'class' in OOP, but in FP (Functional programming)
// It sometimes can be shorter and clearer than classes

// Example 1
function criarProduto(nome, preco) {
    return { nome, preco, desconto: 0.1 }
}
console.log(criarProduto("Notebook", 2199.99))


// Example 2
const criarPessoa = nome => {
    return { falar: () => console.log(`Meu nome é ${nome}`) }
}
const p2 = criarPessoa('Dennis Ritchie')
p2.falar()