// Two types of memory --
// 1. Stack (Primitive - by value)
let fname = "ANISH"
let lname = fname
lname = "KUMAR"
//console.log(fname); //ANISH 

// 2. Heap (non premitive - by ref)
let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}
let user2 = user1
user2.email = "user@outlook.com"
console.log(user1.email) //user@outlook.com