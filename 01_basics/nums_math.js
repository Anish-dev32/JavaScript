let balance = new Number(100)
console.log(balance.toString().length);
console.log(balance.toFixed(3))
balance = 34.656443
console.log(balance.toPrecision(3)) //34.7
balance = 10000000000000000 
console.log(balance.toLocaleString('en-IN'))   //10,00,00,00,00,00,00,000
console.log(Number.MAX_VALUE)

//++++++++ MATHS ++++++++++

console.log(Math.abs(-20))
console.log(Math.round(344.2))
console.log(Math.floor(4343.65))
console.log(Math.sqrt(322))
console.log(Math.max(3,4,66))
console.log(Math.random()) //always give number between 0 and 1
console.log(Math.round(Math.random()*100 +1)) // give any random value till 100
console.log(Math.floor(Math.random()*(max-min)+1))+min //to get num between min and max