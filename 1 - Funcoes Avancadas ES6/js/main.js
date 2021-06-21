// Funcoes classicas
function log(value){
    console.log(value)
}
log('test')

// Funcoes anonimas
var log2 = function(value){
    console.log(value)
}
log2('test2')


// Funcao com retorno
var sum = function(a,b){
    return a+b
}
console.log(sum(4,5))


// Arrow Function
var sum_arrow = (a, b) => a+b

console.log(sum_arrow(4,5))

// Arrow Function com statements
var sum_arrow2 = (a, b) => {
    let c = a+b
    return c
}
console.log(sum_arrow2(4,5))

// Arrow Function com apenas 1 argumento podemos omitir os parentesis
var sum_arrow_1_arg = a => a+5

console.log(sum_arrow_1_arg(4))

// Funcoes construtoras
function Car() {
    this.foo = 'bar'
}
console.log(new Car())


// Objeto com diferentes contextos
var obj = {
    showContext: function showContext() {
        this.log3('teste'); //console.log(this);
        setTimeout(function() {
            this.log3('after 1s')
        }.bind(this), 1000)
    },
    log3: function log3(value) {
        console.log(value)
    }
} 

obj.showContext()

// Objeto com arrow function
var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log3('after 1s arrow')
        }, 1000)
    },
    log3: function log3(value) {
        console.log(value)
    }
} 
obj.showContext()

// Default function arguments
function multiply(a,b=1) {
    return a*b;
}
console.log(multiply(5,5))
console.log(multiply(5))

// Object Literals
var obj2 = {
    prop1: 'Cristiano'
}
console.log(obj2)
// Object Literals (outra maneira)
var prop2 = 'foo'

var obj3 = {
    prop2
}
console.log(obj3)

// Object Literals (outra maneira)
var obj4 = {
    summa: function summa(a,b){
        return a+b
    }
}
console.log(obj4.summa(1,5))

// Object Literals (outra maneira)
var obj5 = {
    summa(a,b){
        return a+b
    }
}
console.log(obj5.summa(2,5))