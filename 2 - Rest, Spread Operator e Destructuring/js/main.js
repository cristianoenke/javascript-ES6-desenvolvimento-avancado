// Funcao classica com diversos argumentos
function sum(a,b){
    var value = 0
    for (var i=0; i < arguments.length; i++){
        value+=arguments[i]
    }
    return value    
}
console.log(sum(5,5,4,6,7,2,1,4,6))

// Mesma funcao com Rest operator ...
function sum2(...args){
    return args.reduce((acc, value) => acc+value,0)    
}
console.log(sum2(5,5,4,6,7,2,1,4,6))

// Com arrowfunction nao existe arguments
const restofargument = (a,b,...rest) => { 
    console.log(a,b,rest)
}
restofargument(1,3,5,6,7,8,4)

// Spread operator
const multiply = (...args) => args.reduce((accum, value) => accum*value,1)

const spreadop = (...rest) =>{
    return multiply(...rest)
}

console.log(spreadop(3,5,6,3,1,3))


// Rest operator em strings
const str = "I am a string"

function restlog(...args) {
    console.log(args)
}

restlog(str)
restlog(...str)

// Outro caso
// Rest operator em strings
const arr = [1,2,3,4]

function restlog2() {
    console.log(arguments)
}

restlog2(arr)
restlog2(...arr)

// Usando Spread Operator para construir arrays
const arr2 = arr.concat([5,6,7]) //old way
console.log(arr2)
const arr3 = [...arr, 5,6,7]

// Spread operator para criar objetos
const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'string'
}

console.log(obj2)

// Destructuring com arrays
var arr4 = ['pepino','tomate','batata',['cebola']]
var pepino = arr4[0]; // Old way
var tomate = arr4[1];
var batata = arr4[2];
var cebola = arr4[3][0];

var [pepino2, tomate2, batata2,[cebola2]] = ['pepino','tomate','batata', ['cebola']]

console.log(pepino, pepino2)

// Destructuring com objetos
var obj3 = {
    name: 'cristiano'
};

var { name } = obj3

console.log(name)
