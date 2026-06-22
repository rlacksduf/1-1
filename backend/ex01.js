const express = require('express');
const fs = require('fs/promises'); // fs라이브러리 = 파일 쉽게 읽고 쓸수있는라이브루
const mysql = require("mysql2/promise");
const path = require('path');

//넌적스 모듈 추가
const nunjucks = require('nunjucks');

const app = express();
const PORT = 3000;
// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱
app.use(express.json());

app.use(express.urlencoded({ extends: true }));

nunjucks.configure('views', { express: app, wtch: true });
app.set('view engine', 'html');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: "1234",
    database: "aaa",
    port: "3306",
    waitForConnectionLimit: 10,
    queueLimit: 0

})

app.get("/", async function (req, res) {
    // res.send("Hello, World!")
    try{
        const [rows] = await pool.query('select * from tb_snack');
        console.log(rows);
        res.render('snacklist',{snacks:rows});

    }catch(e) {
        res.send("에러"+e);
    }
    
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});