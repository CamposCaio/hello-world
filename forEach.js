// CallBack

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)   // Template string
}

fabricantes.forEach(imprimir)   //1. Mercedes 2. Audi 3. BMW
fabricantes.forEach(fabricante => console.log(fabricante))  //Mercedes Audi BMW
fabricantes.forEach(console.log)    //Mercedes 0 ["Mercedes", "Audi", "BMW"] ...
                                    //Value Key Array


// ForEach

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))