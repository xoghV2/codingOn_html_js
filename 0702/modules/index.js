const fs = require('fs'); // 파일을 읽기 위해서는 require('모듈이름') 꼭 이렇게 가져와야 쓸 수 있다. 

//파일쓰기 원래 비동기 방식이다. 동기방식으로 하고싶을 경우 sync 
// fs.writeFile('file.txt','Hello world',(err) =>{
//     if (err) throw err; // err가 뜨면 이렇게 처리를 해라..?? 싱글스레드라서 에러처리가 중요해서?
//     console.log('저장완료');
// })

//파일읽기 
fs.readFile("file.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});
//html..등 ㅇ다른 문서들을 가져와서 읽을 수도 있다. 
//err가 없으면 err처리를 하고 err가 없고 data가 있으면 data를 처리해라.