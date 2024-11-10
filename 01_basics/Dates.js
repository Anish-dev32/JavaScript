let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())  //Sun Nov 10 2024
console.log(myDate.toLocaleDateString())    //11/10/2024

let createdDate = new Date(2024, 0, 23)
console.log(createdDate.toDateString()) //Tue Jan 23 2024

let myTimeStamp = Date.now()
console.log(myTimeStamp)
