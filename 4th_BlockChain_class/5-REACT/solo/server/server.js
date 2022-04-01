const express = require("express");
const app = express();
const port = process.env.port || 4000;
const db = require('../server/config/db');

//라우터 설정
//클라이언트 서버에서 /api/host로 요청 시 heidi로 응답됨.
app.get('/api/host', (req, res) => {
    res.send({ host : 'heidi'});
});

app.get('/api/test', (req, res) => {
    db.query("select * from test", (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});


//메인연결
// app.get('/', (req, res) => {
//     res.send(`Welcome to MAIN`);
// });

//포트연결
app.listen(port, () => {
    console.log(`Server port is ${port}/`);
})