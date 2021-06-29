// Callbacks com tratamentos de erros

function doSomething(callback){
    setTimeout(function(){
        callback('First Data')
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function(){
        callback('Second Data')
    }, 1000)
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
                    try {    
                    setTimeout(function(){
                    console.log(processedData,processedData2)
                    }, 1000)
                    } catch(err){
                         //handle error here
                    }
                })
            } catch(err){
                //handle error here
            }
        })
    } catch(err){
        //handle error here
    }
}

doAll()

// Callback com promises
// const myPromise = new Promise((resolved, reject) => {})

const doSomethingPromise = () => new Promise((resolve, reject) => {
   // throw new Error('Something wrong')
    setTimeout(function(){
        resolve('First Data Promise')
    }, 1000);
})

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second Data Promise')
    }, 1000);
})

//console.log(doSomethingPromise)

// Promises podem estar 'Pending', 'Fulfilled' ou 'Rejected'
// Para executar a promise, com tratamento de erro
doSomethingPromise().then(data => console.log(data)).catch(error => console.log(error))

// Encadeando promises

doSomethingPromise().
    then(data => {
        console.log(data)
        return doOtherThingPromise()
    })
    .then(data2=> console.log(data2))
    .catch()

// Para executar Promises em paralelo:
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {console.log(data)})

// Para exibir o resultado da que primeira for executada
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {console.log(data)})

// Fetch

fetch('/data.json').then(responseStream => {
    responseStream.json().then(data =>{
        console.log(data)
    })
})

fetch('/data.json') //Precisei montar um server para executar esta parte do código
    .then(responseStream => responseStream.json())
    .then(data => {console.log(data)})
    .catch(err =>{
        console.log('error')
    })

// Async - Await, para lidar com processos assincronos de maneira sequencial
const asyncTimer = () => new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(12345)
    }, 1000)
})

const simpleFunc = async () => {
    const data = await asyncTimer()
    return data
}
simpleFunc().then(data => {
    console.log(data)
})

 