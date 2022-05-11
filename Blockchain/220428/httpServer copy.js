// 웹에 명령어를 입력해서 내 노드를 제어하는 서버 
// express, body-parser (명령어를 해석))
// const express = require('express'); // 예전버전 , javascript conmon.js에서 통째도 다 가져온다.
import express from 'express'; // 딱 필요한 express만 불러온다. 속도나 크기면에서 import express를 많이 쓴다.
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';
import { connectionToPeer, getPeers, mineBlock } from './p2pServer.js';

// 초기화 함수
const initHttpServer = (myHttpPort) => { // 함수의 이름 (매개변수)
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Hello, World!!!');
    })

    app.get('/blocks', (req,res) => {
        res.send(getBlocks());
    })

    app.get('/getPeer', (req,res) => {
        res.send(getPeers());
    })

    app.post('/createBlock', (req,res) => {
        // const data = req.body.data
        // res.send(createBlock(data));
        // res.send(req.body.data);
        // createBlock(req.body.data);
        res.send(createBlock(req.body.data));
    })

    app.post('/mineBlock', (req,res) => {   
        res.send(mineBlock(req.body.data)); // mineBlock이라는 함수는 block.js 
    })

    app.post('/addPeer', (req, res) => {
        // console.log('/addPeer : ', res.body.message);
        res.send(connectionToPeer(req.body.data));
    })

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    })
}



export { initHttpServer } ;


