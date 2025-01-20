console.log(b); //There will be no error shown but just undefined because when a var variable is hoisted its given a special placeholder undefined

console.log(a); //This will throw a reference error. aka temporal dead zone from the moment it was created till it was initialized

console.log(c); //This will also thorw ref error

// In case of var variable then they are attached to the window object. In the global context
// But for let & const, they are not attached to the global or window context. They are maintained in a separate storage
// let and const have similar traits. Both are hoisted and have a temporal dead zone but let cannot be redeclared whilst const can be and const cannot be called without initialization whilst let can be
let a = 10;
var b = 2;
const c = 2;
