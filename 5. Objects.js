// OBJECTS 
// {} => Object
// {} => Blocks 
// {} => Data Binding
var obj = { // Unstructured Data
    fname: "arjun",
    lname: "sn",
    id:12312312
}

console.log(obj.id)

var obj = new Object()
//obj_name.property = value
var myCar = new Object
myCar.make = "Ford"
myCar.model = "Mustang"
myCar.year = 1987
var type = "some"
console.log(`With the Constructor: ${myCar.make}`)

// ES6 Methods for Object

// 1. Object.create()
var objCreate = {
    type: "arjun",
    lname: "sn",
    display:  function ()  {
        console.log(this.type)
    }
}

var superObject = Object.create(objCreate)
superObject.display()

var oneMoreObject = Object.create(objCreate)
oneMoreObject.type = "David"
oneMoreObject.display()

// 2. Object.assign()
// Syntax: Object.assign(target,...sources)

var det = {name:"Tom", ID:"E1001"}
var copy = Object.assign({fname:"something"},det)
console.log(copy)

// 3. Delete Operator
var objDelete = {name:"Tom", ID:"E1001"}
delete objDelete.name
console.log(objDelete)

// Compare Objects // No Two objects same key value pairs are equal
var obj1 = {name:"Tom", ID:"E1001"}
var obj2 = {name:"Tom", ID:"E1001"}
console.log(obj1 === obj2)

// Object Destructuring 
var objDestruct = {
    someName:"Tom", 
    ID:"E1001"
}
var {someName,ID} = objDestruct

console.log(someName)
