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



function lady(menu){
    function guy(menu){
        return menu
    }
    console.log(guy(menu))
}


first() // First Function He starts executing it
second() // Event Queue 1
lady("pizza") // Two Dependent Events => Call Stack [lady dependen on the guy to finish]=>  Event Queue 2
fourth() // Event Queue 3
third()  // Event Queue 4


// ASYNCHRONOUS
// Delay of time it would make it asynchronous
// Asynchronous => You don't have an order
first() // First Function He starts executing it
third() // Event Queue 1
setTimeout(second,2000) // JS works asynchronously if there is a delay of time 
// Event Queue 3
fourth() // Event Queue 2


