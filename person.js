// module Wrapper function when we work without {"type":"module"}
// but with require('./person') and exports.module= Person
// (function(exports, require, module, __filename, __dirname) {})
// console.log(__dirname,__filename)
 class Person{
  constructor(a,b){
    this.name=a;
    this.age =b;
  }
  greeting(){
    console.log(`Name is ${this.name} and he/she is ${this.age}`);
  }
}
export  { Person };