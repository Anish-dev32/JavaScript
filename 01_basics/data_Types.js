"use strict" //treat all JS code as newer version
//alert(3+2) using node js ,not browser

let name = "Anish" //String can be in '' or ""
let age = 43 // number -> 2 to power 53
let isLogggedIn = false

//console.log(typeof age) //number

//null -> Standalone value ; type -> object
//undefined -> not yet assigned
//symbol -> unique
//object

//Primitive Datatype - call by value
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive) - Arrays, Objects, Functions

const id = Symbol('2323')
const anotherId = Symbol('2323')
console.log(id === anotherId)//false

const heros = ["Atal","Abdul"] //Array
let myObj = {           //Object
    name:"anish",
    age:34
}

const fun = function(){ //function
    console.log("Dummy")
}