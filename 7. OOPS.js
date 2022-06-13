// CLASS
class ES6{
    constructor(a,b){
        this.a = a
        this.b = b
   }
   add(){
       var c = this.a + this.b
       console.log(`Addition ${c}`)
   }
   subract(){
       var c = this.a + this.b
       console.log(`Subtract ${c}`)
   }
}
var objexamp = {
    a: 10,
    b: 11,
    add: () => {},
    subtract: () => {}
}

var obj = new ES6(10,11) // Constructor => add, subtract
obj.add()
obj.subract()

var obj1 = new ES6(11,12) // Constructor => add, subtract
obj1.add()
obj1.subract()
 
// OOPS => Reusability of Code
// Inheritance
  // Single Inheritance
  class A{ // Parent Class
      display(){
          console.log("Displaying Text")
      }
  }
  class B extends A{ // Derived Class

  }
  var obj2 = new B()
  obj2.display()

  // Multilevel Inheritance
  class C { // Parent Classs
      someProperty(){
          console.log("Some Properties of Class C")
      }
  }
  class D extends C{} // Derived Class
  class E extends C{} // Derived Class
  var obj3 = new D()
  var obj4 = new E()
  obj3.someProperty()
  obj4.someProperty()
  
  // Hierichical Inheritance
  class grandFather{
      grandFatherProperty(){
          console.log("Some Propeties of Grand Father")
      }
  }
  class Father extends grandFather{}
  class Son extends Father{}
  var obj5 = new Son()
  obj5.grandFatherProperty()
  // Multiple Inheritance(Not Supported in JavaScript)
  // Class A extends B,C,D


// Polymorphism

  // Overriding
  class Parent{
    parentProperty(){ // Parent Class Function
        console.log("Parent Property")
    }
  }
  class Child extends Parent{ // Derived Class
    parentProperty(){ // Derived Class Function
        console.log("Child Property")
    }
    someOtherMethod(){ // Derived Class Function
        super.parentProperty()
    }
  }
  var obj6 = new Child()
  obj6.parentProperty()
  obj6.someOtherMethod()


  // Overloading
  class Overloaded{
      display(){
        console.log("First Function")
      }
      display(){
        console.log("Second Function")
      }
  }
  var obj7 = new Overloaded()
  obj7.display()
  
// Abstraction
// Interfaces [Doesn't support] // Protype Handling

