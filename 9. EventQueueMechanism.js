// Single Threaded  => Single Execution => one at a time
// Multi Threaded   => Multiple Execution => Few at a time
function first(){
    console.log("First Function")
}
function second(){
    console.log("Second Function")
}
function third(){
    console.log("Third Function")
}
function fourth(){
    console.log("Fourth Function")
}

first()
second()
third()
fourth()

// Synchronous => In an Order
first() // First Function He starts executing it
second() // Event Queue 1
fourth() // Event Queue 2
third()  // Event Queue 3

// Asynchronous => You don't have an order
first()
setTimeout(second,2000) // JS works asynchronously if there is a delay of time
third()
fourth()

function lady(menu){
    function guy(menu){
        return menu
    }
    console.log(guy(menu))
}

lady("pizza")



