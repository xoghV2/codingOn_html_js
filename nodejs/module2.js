//하나의 모듈 파일에 여러개의 모듈 만들기 

//방법1

function add(x,y){
    return x + y;
}


function subtract(x,y){
    return x - y ;
}

function multiply( x , y ){
    return x * y ; 
}

module.exports = { add , subtract , multiply };


// const add = (x, y) => x + y ; // 화살표 함수로 표현하는 방법  한 줄로만 작성했을 때 return을 생략하고 표시가능하다. 
// const subtract = (x,y) => x - y;
// const multiply = (x,y) => x * y;

//방법2
 
// module.exports.add = function(x,y){
//     return x + y ;
// }

// module.exports.subtract = function(x,y){
//     return x - y ; 
// }

// module.exports.multiply = function(x,y){
//     return x * y ;
// }

//방법2 생략버전 

exports.add = function(x,y){
    return x + y ;
}

exports.subtract = function(x,y){
    return x - y ; 
}

exports.multiply = function(x,y){
    return x * y ;
}