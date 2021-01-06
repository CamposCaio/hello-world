// IIFE -> Immediately Invoked Function Expression
// You can get out of global scope
(function () {
    let myVar = 1
    console.log(`Immediately executed out of global scope, myVar = ${myVar}`)
})()

// Semicolon at beginning needed
;(function () {
    let myVar = 2
    console.log(`Immediately executed out of global scope, myVar = ${myVar}`)
})()