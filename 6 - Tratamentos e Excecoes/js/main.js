// Constantes nao possuem hoisting
/*
console.log(name);

const name = 'Cristiano'

console.log('Continue..')
*/
// o tratamento do erro é feito através de um try/catch

try {
console.log(name);

const name = 'Cristiano'
} catch(err){
    console.log('Error: ', err)
}
console.log('Continue..')

// Erros são classes que podem ser instanciadas:
try {
    console.log(name);
    const name2 = 'Cristiano'
    const myError = new Error('Custom Error Message')
    throw myError    
} catch(err){
        console.log('Error: ', err)
    }
    console.log('Continue..')


// É possivel estender a classe erro:
class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data
    }
}
try {
    console.log(name);
    const name2 = 'Cristiano'
    const myError = new CustomError({
        message: 'Error Custom Error Class',
        data: {type: 'Custom error'}
    })
    throw myError    
} catch(err){
        console.log('Error: ', err)
        console.log('Data: ', err.data)
    }
    console.log('Continue..')