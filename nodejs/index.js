//모듈 1
const { add,subtract, multiply} = require('./module2');
const connect =  require('./modulel');  // require 로 연결한 폴더를 연다?
console.log(connect());


//모듈2
const calculator = require('./module2');
console.log(calculator.add(1,3));
console.log(calculator.subtract(6,3));
console.log(calculator.multiply(5,8));

//모듈2 객체구조분해 
console.log(add(5,6));
console.log(subtract(10,2));
console.log(multiply(5,1));