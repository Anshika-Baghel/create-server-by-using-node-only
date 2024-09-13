// how NodeJS differs from Vanilla Js
// 1) Node runs on a server not in a browser(backend not frontend)
// 2)The console is the terminal window.
// To run console directly in the terminal write node in the vs code terminal and hit enter.
// T exit console in the vs code terminal press ctrl+c hit enter and then again press ctrl+c and hit enter.
console.log('Hello world')
// In order to execute the file type node filename.js in the terminal and ten hit enter or we can just simply type node filename and hit enter.
// global object instead of window object
// global is the keyword for global object.
//console.log(global)
// NodeJS has core modules that Vanilla Js does not have.
// CommonJS modules instead of ES6 modules.
const os=require('os')
const path=require('path')
//const math=require('./math')
// we would have done destructure then also it would work fine

//now how do we destructure a function
const {add,subtract,multiply,division}=require('./math')

console.log(add(3,8))
console.log(subtract(3,8))
console.log(multiply(3,8))
console.log(division(3,8))
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())  //homedir -> home directory
// console.log(os.type())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))  //extname ->extension name and __ ->this is double underscore.


// console.log(path.parse(__filename))  //
