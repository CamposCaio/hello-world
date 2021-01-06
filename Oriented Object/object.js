const car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
    accelerate () { // method
        console.log('accelerated!')
    }
}

console.log(car.type) //or car['type']
car.accelerate()      //accelerated!


// Getters & Setters

const sequence = {
    _valor: 10,    //private variable *convenction*
    get valor() { return this._valor-- },
    set valor(valor) {
        if (valor > this._valor)
            this._valor = valor
    }
}

sequence.valor = 100
console.log(sequence.valor, sequence.valor)