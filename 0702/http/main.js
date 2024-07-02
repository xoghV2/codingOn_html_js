
const http = require('http');
const fs = require('fs');
const PORT = 8000; 

const server = http.createServer((req,res)=>{
    //파일전송

    fs.readFile("index.html",(err,data)=>{ // 순서 (첫번째가 에러변수,두번째가 data변수 이름은 뭘로 해도 상관없다.)
        if(err){ // 에러처리를 먼저 하지 않으면 nodejs가 아예 멈춰버림 그래서 에러처리를 먼저해줘야 뻗지않음
            console.error(err);
            res.writeHead(404); 
            res.end(err.message);
            return;
        }
        res.writeHead(200);
        res.write(data);
        res.end("<div>End</div>");
    })
});
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});