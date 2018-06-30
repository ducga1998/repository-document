 // how to use Promise in ES6
 // Explain 
 async function A (){
  return Promise.resolve("bla bla bla bla)
 }
 var x = await A();  //  log x = "bla bla bla bla"
 var AA = new Promise((resolve,reject) => { resolve("AA")})
 var AB = new Promise((resolve,reject) => { resolve("AB")})
 var AC = new Promise((resolve,reject) => { resolve("AC")})
 var CCCCC = function() {
     return Promise.all([AA,BB,CC])
 }
 var logC = await CCCCC();
 console.log(logC) // log ['AA','BB','CC']
  a here . it log all argument in resolve 
  not then .
