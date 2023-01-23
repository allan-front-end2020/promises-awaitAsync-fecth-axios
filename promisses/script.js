// CRIAÇÃO DE PROMESSA
//criamos um variavel q  vai instanciar um promise
const myPromise = new Promise((resolve , reject)=> {
    
    const nome = "alln"
    if(nome === "allan"){
        resolve('usuaio allan encontrado')
    }else{
        reject("allan nao encontrado")
    }
})
// para promise ser executada chamos o nome da variavel
//mas o metodo THEN
// DATA VAI COMO AGUMENTO SO POR CONVERSÃO/ MAS PODERIA
// SER QUAL OUTRO NOME
myPromise.then((data)=>{
    console.log(data)
})

//encadeamento de then
const myPromise2 = new Promise((resolve , reject)=> {
    
    const nome = "allan"
    if(nome === "allan"){
        resolve('usUARIOo allan encontrado')
    }else{
        reject("allan nao encontrado")
    }
})
// para promise ser executada chamos o nome da variavel
//mas o metodo THEN
// DATA VAI COMO AGUMENTO SO POR CONVERSÃO/ MAS PODERIA
// SER QUAL OUTRO NOME

//encadeamento de then
myPromise2.then((data)=>{
    return data.toLowerCase()
}).then((string)=>{
    console.log(string)
})

const myPromise3 = new Promise((resolve , reject)=> {
    
    const nome = "joao"
    if(nome === "allan"){
        resolve('allan encontrado')
    }else{
        reject("allan nao encontrado")
    }
})

myPromise3.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("aconceteceu um erro")
})

// resolvendo varias promessas

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("p1 k ")
    },2000 )
})
const p2 = new Promise((resolve, reject) => {
    resolve('p2, ok!')
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3, ok!')
})
// nome da variavel é opcional
//PROMISE.ALL espera todas as promessas serem resolvida
// para apresentar os dados
const resolverAll = Promise.all([p1, p2, p3]).then((data)=>{
    console.log(data)
})
//--------------------------------------------------------
//varias promessas com race
// race vai impromir somente primeira promise que for resolvida
const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("p4 k ")
    },2000 )
})
const p5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('p5, ok!')
    },3000)
})
const p6 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("p5, ok")
    }, 4000)
    
})
const resolverAll2 = Promise.race([p4, p5 , p6]).then((data)=>{
    console.log(data)
})

//fetch api
const userName = 'allan-front-end2020'

fetch(`https://api.github.com/users/${userName}`,{
  method: "GET",
  headers:{
    Accept:" application/vnd.github.v3+json",
  }
}).then((response)=>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data.bio)
    console.log(data.name)
    console.log(data.id)
    console.log(data.avatar_url)
    console.log(data)
}).catch((error)=>{
    console.log(`houve algum error: ${error}`)
})