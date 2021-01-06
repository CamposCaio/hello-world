// JSON to Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

// Object to JSON
const toJSON = {a: 1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(toJSON))