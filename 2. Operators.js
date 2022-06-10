// OPERATORS
// ARITHEMATIC OPERATORS
//[+,-,*,/,%,++,--]
var a = 10
var b = 11
var c = a + b 
console.log(a++) // 10
console.log(a)
console.log(++b) // 12
console.log(a--) // 11
console.log(a)
// RELATIONAL OPERATORS
//[<,>,<=,>=,==, ===, !=]
var d = 10
var e = "10"
if(d <= e){
    console.log(true)
}
else{
    console.log(false)
}
// LOGICAL OPERATORS
//[&&,||,!]
var f = 13
var g = 14
if(!(f == 14 || g ==14 )){ 
    // && => If both the statements are true then only it is true
    // || => Any one of the statment if it is true then expression is true
    console.log(f == 14 || g ==14)
}else{
    console.log(false)
}
// BITWISE OPERATORS
// [&, |, ^, ~, <<, >>, >>>]
var h = 10 // => 1010
// 10 => 1010 => 2^3[1] + 2^2[0] + 2^1[1] + 2^0[0] = 8+0+2+0 = 10
// 15 => 1111 => 8 + 4 + 2 + 1 = 15
// 16 => 0001 0000 => 0+0+0+2^4 0+0+0+0 = 16
var i = 11 // => 1011 => 8 + 0 + 2 + 1 = 11

// & => Both the statements should be true then the result is true
// | => Any one of the statement is trure then the result is true
// ^ => if both the statements are true or false then it is false
var j = h ^ i
// 1010
//      ^
// 1011
//-------
// 0001 => 0 + 0 + 0 + 2^0 => 1
console.log(j)
var k = 10
// +1 to it and give negative signature
// -1 to it and give positive signature
console.log(~k)
// Left Shift
var l = 11 // 1011
// 0010 1100 => 16 + 4 + 2 => 22
console.log(l << 2)
// Right Shift
var m = 12 // 1100
// 0011 => 6
console.log(m >> 2)
var k = -12
var q = k>>1
// 1100 // 0110 >> 6
console.log("shift of k"+ q)
// 10 9 8 76543210 -1 -2 -3 -4 -5 -6 -7 .. -12
// 0 => 0000 // -1 
// Zero Fill Right Shift(>>>)
var r = -1
var s = r >>>1
console.log("shift of r: " + s)

// MISCILLEANEOUS OPERATORS
// [typeof, ?(ternary operator), delete, rest operator, spread operator]
var n = "sdfakjsdl"
console.log(typeof n)

var obj = {
    fname:"arjun",
    lname:"sn",
    id:12312
}
delete obj.fname
console.log(obj)

// Ternary Operator
var o = 11
console.log(o == 10 ? 13: 14)
