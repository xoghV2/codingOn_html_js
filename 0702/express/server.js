    const express = require('express')
    const app = express();
    const PORT = 8080;

//뷰 템플릿 
app.set("view engine","ejs");
app.set('views','./views') //뷰파일들의 위치 알려줌(명시적 경로)
//뷰 파일을 views 폴더에 넣을 때는 생략이 가능함 
//views폴더 외 지정하고 싶을 때
//app.set('views','./template') 생략이 불가능 
// const path = require('path')
// app.set('views',path.join(__dirname,'template'))

    app.get("/",(req,res) =>{
        res.send("hello express");
    });

    app.get('/test',(req,res)=>{
        res.render('test',{name:'태호'}); //데이터를 보낼 때 객체안에 담아서 보낸다.
    });

    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    });

    