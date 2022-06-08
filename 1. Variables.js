
// Declaration
var a
// Intialization
a = 10
// Definition
a = "dfsjlasd"
a = true

// Data Types
// Primitive Data Types
// 1. Number
var b = 10 // Int, float
// 2. String or Character
var c = "hello world" // => 'c'
// 3. Boolean
var d = true
// 4. Null
var e = null // Intentionally saying that it is not going to have value
// 5. Undefined
var f = undefined // You may give value at some point
// Non Primitive Data Types
// 1. Array
var g = [1,null,"hello",true,5] // Javascript engine decides the index postion
// Structured Data
console.log(g[2])
// 2. Object
// Unstructured Data
var obj = {
    fname: "arjun",
    lname: "sn",
    id: 123
}

// Scope of Variables
// Global Scope
var h = 10
console.log(h)
function display1(){
    console.log(h)
}
// Local Scope / Functional Scope
function display2(){
    var i  = 11
    console.log(i)
}
display2()
// console.log(i)
// Block Scope
{
    var k = 10
    console.log(k)
    const l = 12
    // Note: You can only define const 
    console.log(l)
}
console.log(k)
// Hoisting
console.log(j)
var j
// Lexical Scope


var m = "hello i am a string"

function display3(){
  
    console.log(m)
    function display4(){
        console.log(m)
    }
    display4()
}

display3()




















