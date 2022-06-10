// General Function 
function add(){
    let a = 10
    let b = 11
    let c = a + b
    console.log(c)
} // Function Definition

add()// Functional Call

// Parameterized Function
function parameterizedFunction(a,b){
    let c = a * b
    console.log(c)
}

parameterizedFunction(10,12) // Pass By Values
parameterizedFunction(10,15) // Pass By Values
parameterizedFunction(10,18) // Pass By Values

let d = 13
let e = 14
parameterizedFunction(d,e) // Pass By Reference

// Returning Function
function returningFunction(){
    console.log("hello world")
    return 10
}
console.log(returningFunction());

// Anonymous Function
// Function without a name
(
    function (a,b){
        console.log(a+b)
        console.log("Anonymous Functions")
    } // Function Defintion
)(10,11); // Functional Call // Immediately invoked function expression
// Tail Call Optimization

// Lambda Function// Fat Arrow Function
(
    (a,b) => {
        console.log(`Lambda Function  ${a*b}`) // Template Literals
    }
)(11,10);// Functional Call

// Recursive Functions
function factorial(num){
    if(num <=0){
        return 1
    }
    else{
        return num * factorial(num - 1)
    //  return 5 * factorial(5 - 1)
                // 4 * factorial( 4 - 1)
                    // 3 * factorial(3 - 1)
                        // 2 * factorial(2 - 1)
                            // 1 * factorial(1 - 1 )
                            // 1 * 1
    }
}
// 5 => 5 * 4 * 3 * 2 *1 => 120
console.log(factorial(5))




