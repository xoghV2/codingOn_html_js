

//date 객체 생성 -  today 
let today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const day1 = today.getDay();//요일 0 일 1 월 2 화 3 수 4 목 5 금 6 토 
console.log(day1)
//display 변수 선언 
let displayDate = document.getElementById("today");
let day2 = " "; //초기화할 때 빈 문자열을 넣어 문자형이라고 알려줌.

switch(day1){
    case 0:
        day2 = "일요일"
        break
    case 1:
        day2 = "월요일"
        break

    case 2:
        day2 = "화요일"
        break
    case 3:
        day2 = "수요일"
        break
    case 4:
        day2 = "목요일"
        break
    case 5:
        day2 = "금요일"
        break
    case 6:
        day2 = "토요일"
        break
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day2}`;

// 시간 추출
let clock = function(){
    let now = new Date(); // 전역함수인 today가 함수에서 호출이 되지 않아서 한번더 now로 new date() 호출해줌
    let hours = now.getHours(); // now에 저장된 정보중에서 시간을 hours에 가져옴
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // //오전 오후로 분기하기 
    // if(hours <= 12){
        
    //     for(let i =12 ; i > 0; i--){
    //      hours = hours - i ;
    //     }
    //     document.write(`오전 ${hours} : ${minutes} : ${seconds}`);
    // } else{
    //   document.write(`오후 ${hours} : ${minutes} : ${seconds}`);
    // }

    hours = (hours < 10 ) ? "0" + hours : hours;
    minutes = (hours < 10 ) ? "0" + minutes : minutes;
    seconds = (hours < 10 ) ? "0" + seconds : seconds; // 삼항 연산자 


    let displayTime = document.getElementById("clock");
    displayTime.innerHTML = `${hours} : ${minutes}: ${seconds} `  ;
}
setInterval(clock,1000); //함수안에 함수가 있는게 콜백 계속 계속 



