// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
//const express = require('express')
import express from 'express'
import bodyParser from 'body-parser'
import { getBlocks, createBlock } from './block.js'
import { connectionToPeer, getPeers, mineBlock } from './p2pServer.js'
import { getPublicKeyFromWallet } from './wallet.js'

// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/createBlock', (req, res) => {
        res.send(createBlock(req.body.data));        
    })

    app.post('/mineBlock', (req, res) => {
        res.send(mineBlock(req.body.data));
    })

    app.get('/peers', (req, res) => {
        res.send(getPeers());
    })

    app.post('/addPeer', (req, res) => {
        console.log('/addPeer : ',req.body.message);
        res.send(connectionToPeer(req.body.data));
    })

    app.post('/sendTransaction', (req,res) => {
        // transaction out에 필요한 데이터
        const address = req.body.address;
        const amount = req.body.amount;

        res.send(sendTransaction(address, amount)); 
    })

    app.get('/address', (req, res) => {
        const address = getPublicKeyFromWallet();
        res.send( {'address' : address });
        // res.send( `address : ${ address }`);
    })

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    })
}

export { initHttpServer }