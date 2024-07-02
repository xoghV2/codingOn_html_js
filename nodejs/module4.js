


// module.exports.add = function(x,y){
//     return x + y ;
// }

// module.exports.subtract = function(x,y){
//     return x - y ; 
// }

// module.exports.multiply = function(x,y){
//     return x * y ;
// }


// const add = (x, y) => x + y ; // 화살표 함수로 표현하는 방법  한 줄로만 작성했을 때 return을 생략하고 표시가능하다. 
// const subtract = (x,y) => x - y;
// const multiply = (x,y) => x * y;


//es6는 모든 exports 와 import 문이 로드 시점에 한번에 평가되고 처리되기 때문에 
// 함수선언이나 변수 선언의 위치와 무관하게 올바르게 작동한다
// 하나를 내보낼 때는 export default 그러나 했음에도 또 내보낼수 있다. 
//그때는 default xxx , 내가 default로 내보내고 싶은것만 default로 내보낼 수 있다. 
// 파일에 default는 무조건 하나 


// export {add,subtract,multiply};

//방법2  ES6버전 함수작성
// export function add( x , y ){
//     return x + y;
// }
// export function subtract(x,y){
//     return x - y ; 
// }
// export function multiply(x,y){
//     return x * y ;
// }

//방법2  화살표 함수로 작성 
export const add = (x,y) => x+y;
export const subtract = (x,y) => x-y;
export const multiply = (x,y) => x*y;

//방법3 (한번에 내보내기 )
// const add = (x,y) => x +  y;
// const subtract = (x,y) => x-y;
// const multiply = (x,y) => x *y;
// //하나의 객체 변수로 내보내면 가능 
// const values = { add , subtract ,multiply}
// export default values; 
