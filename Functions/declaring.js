// 1.Traditional function
// 2.Arrow function
// 3.Variable function
// ----------------------------------------------------------------
// Important: the 'this' points to scope where the function is called,
// but in arrow functions, the 'this' is defined with the function and points to it.
//
// If you want to define the 'this', you can specify the scope in the calling function using bind:
//
// function.bind(scope)
//
// see more details in calling.js


// 1. Traditional function
function tFunction(p1, p2) {
    return this
}
console.log(tFunction())    //Global Object ('this' refers to here)


// 2. Arrow function
const aFunction = () => this
console.log(aFunction())    //{} ('this' refers to function)


// 3.Variable Function
const vFunction = function (p1, p2 = 2) {
    console.log(p1 * p2)
}
vFunction(6, 7) //42