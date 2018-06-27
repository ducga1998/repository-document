var Object 1 = {};
// understand get set in es6 
Object.definePropety(Object1 , 'propety1' , {value : '' , writable: true , configuable :true }});
var a = {}; // a is object
a.__proto__ = Array.prototype;  // a is array .. __propto__ is super class 
//// class in es6 .. convert function
class A {
  constructor(){
    console.log(this)
  }
  static B(){
    console.log("call B t0 class static")
    console.log(this); /// a here . it will log class
  }
  B(){
    console.log("function to instance class ")
    console.log(this) // a here . It will log undefine
  }
}
 const instance  = new A();
A.B(); // log "call B t0 class static" and class ..
instance.B(); // log function to instance class and undefine 

