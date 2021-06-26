// Symbols

const uniqueId = Symbol('Hello');
console.log(uniqueId)

// Symbols são unicos, mesmo usando a mesma identificacao
const uniqueId2 = Symbol('Hello') 
console.log(uniqueId===uniqueId2)

// Usando Symbols são unicos, mesem objetos
const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj)

// Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,4,6]
const it = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of arr) {
    console.log(value)
}

// Criando um objeto iteravel
const obj2 = {
    values: [1,3,6,9],
    [Symbol.iterator](){
        let i = 0
        return {
            next: () =>{
                i++
                return{
                    value: this.values[i-1],
                    done: i> this.values.length
                }
            }
        }
    }
}
const it2 = obj2[Symbol.iterator]()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())

for (let value of obj2) {
    console.log(value)
}

// agora é possivel usar spread operator no objeto
const arr2 = [...obj2]
console.log(arr2)

// Generators
function* hello(){
    console.log('Hello')
    yield
    console.log('From')
    yield
    console.log('Function')
    yield
}

const it3 = hello()

console.log(it3.next())
console.log(it3.next())
console.log(it3.next())

function* naturalNumbers(){
    let number = 0;
    while(true) {
        yield number;
        number++;
    }
}
const it4 = naturalNumbers();
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())

// Generator em um objeto
const obj4 ={
    values: [2,4,6,8],
    *[Symbol.iterator](){
        for (var i =0; i< this.values.length; i++){
            yield this.values[i]
        }
    }
}

for (let value of obj4) {
    console.log(value)
}
