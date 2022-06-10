// Decision Making
// IF
// Syntax: if(expression)// true
{
    // enter the block
}
var a = 11
if(a == 10){
    console.log("enter the block")
}
// IF ELSE
if(a == 10){
    console.log("enter the block")
}
else{
    console.log("enter the else block")
}
// NESTED IF
var b = 12
if(a==11){
    console.log("Enter the first block")
    if(b == 10){
        console.log("Enter the second block")
    }
}

// LOOPS
// FOR
// Syntax: for(intialization; condition/expression; update){

//}
for(var i =0; i<5; ++i){
    console.log(i)
}
// FOR IN => Objects/Arrays => Object
var obj = {
    fname:"arjun",
    lname:"sn",
    id:68798
}
var array1 = [1,2,3,4]
for(var key in obj){
    console.log(obj[key])
}
for(var j in array1){
    console.log(j)
}
// FOR OF
for(var k of array1){
    console.log(k)
}
// WHILE 
// Syntax: while(expression/condition) => true
// { iterate
// }
var l = 10
while(l< 14){
    console.log(l)
    i++
}
// DO WHILE
var m = 11
do{
    console.log("Do While Block: " + m)
    m++
}while(m < 11)