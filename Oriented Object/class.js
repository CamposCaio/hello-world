// Classes are a template for creating objects

class Pessoa {
    constructor(nome) { // Executed when the object is created
        this.nome = nome
    }

    falar() {   // Method
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Brendan Eich')
p1.falar()