// Declaring Variables

let a = 4
const b = 5 //self explanation


var c = 3 //avoid using 'var': no block scope (only global and functions scopes) 
          //and it can be redeclareted

var c = 30
a = 40

console.log(a, b, c)  //40 5 30


// Destructuring example

const pessoa = {   // Object 
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade:i, endereco:{numero}} = pessoa

console.log(nome, i, numero)      //Ana 5 1000
