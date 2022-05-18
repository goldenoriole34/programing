// import { getBlocks, createBlock } from '../block.js'
// import { connectionToPeer, getPeers, mineBlock } from '../p2pServer.js'
// import { getPublicKeyFromWallet } from '../controller/blocks/wallet.js'
import { getBlocks, createBlock, blocks } from '../controller/blocks/block.js'
import { connectionToPeer, getPeers, mineBlock } from '../controller/blocks/p2pServer.js'
import { getPublicKeyFromWallet, createPrivateKey } from '../controller/blocks/wallet.js'

import express from "express"
import pool from '../db.js'
import ecdsa from 'elliptic';


const router = express.Router();
const ec = new ecdsa.ec('secp256k1');


router.get('/', (req, res) => {
  res.send('Hello, World!');
})

//현재 생성된 블록 조회
router.get('/blocks', (req, res) => {
  res.send(getBlocks());
})

//블록 채굴
router.post('/view', async (req, res) => {
  const { blockData } = req.body
  try {
    let [[result]] = await pool.query(`SELECT * FROM blockdata WHERE idx=${blockData} OR datas=${blockData} OR timestamps=${blockData} OR hashs=${blockData} OR previousHash=${blockData} OR difficulty=${blockData} OR nonce=${blockData}`)
    postResult.push(result)
    // console.log('idx = 1 Block 조회 성공!!')
    // console.log(result)
    res.send(result)
  } catch (e) {
    // console.log('idx = 1 Block 조회 실패!!')
  }
})

router.get('/view', async (req, res) => {
  // try {
  //   console.log("postResult" + postResult)
  //   let [[result]] = await pool.query(`SELECT * FROM blockdata WHERE idx=${blockData} OR datas=${blockData} OR timestamps=${blockData} OR hashs=${blockData} OR previousHash=${blockData} OR difficulty=${blockData} OR nonce=${blockData}`)
  //   // console.log(result)
  // } catch (e) {
  //   console.log('블록 목록 조회 실패!!!')
  // }
  res.send(postResult)
  console.log("befor : " + postResult[0])
})
postResult=[];
console.log("after : " + postResult)

//블록 채굴
router.get('/mine', async (req, res) => {
  res.send("hi mine")
})

router.post('/mine', async (req, res) => {
  res.send(mineBlock(req.body.data));
  let blockContent = blocks[blocks.length-1];
    
  try {
    await pool.query(`INSERT INTO blockdata(idx, datas, timestamps, hashs, previousHash, difficulty, nonce) VALUES(${blockContent.index}, "${blockContent.data}", "${blockContent.timestamp}", "${blockContent.hash}", "${blockContent.previousHash}", ${blockContent.difficulty}, ${blockContent.nonce})`)
    console.log('New Block 저장 성공!!')
  }
  catch (e) {
    console.log('New Block 저장 실패!!')
  }
})

//참여 노드 조회
router.get('/peers', (req, res) => {
  res.send(getPeers());
})

// 참여 노드 추가
router.post('/addPeer', (req, res) => {
  console.log('/addPeer : ', req.body.message);
  res.send(connectionToPeer(req.body.data));
})


// 지갑생성
router.post('/createwallet', async (req, res) => {
  const { passwd } = req.body;
  const privateKey = createPrivateKey();
  const publicKey = ec.keyFromPrivate(privateKey, 'hex');
  const wallet = publicKey.getPublic().encode('hex').substring(0, 63);
  try {
    await pool.query(`INSERT INTO wallet(publickey, privatekey, passwd) VALUES("${wallet}", "${privateKey}", "${passwd}")`)
  } catch (e) {
    console.log("지갑 생성 실패")
  }
})

router.get("/signinfo", async (req, res) => {
  const [result] = await pool.query(`SELECT * FROM wallet ORDER BY idx DESC LIMIT 1`);
  res.send(result);
})

// 로그인 

router.post("/login", async (req, res) => {
  const AllKey = [];
  const { publickey, passwd } = req.body;
  const [idResult] = await pool.query(`SELECT publickey, passwd FROM wallet`);
  for (let i = 0; i < idResult.length; i++) {
    AllKey.push(idResult[i].publickey, idResult[i].passwd)
  }
  const ValidLogin = () => {
    for (let j = 0; j < AllKey.length; j++) {
      if (publickey == AllKey[j] && passwd == AllKey[j + 1]) {
        return true;
      }
    }
  }

  if(ValidLogin()) {
    res.status(200).send({message: "로그인 성공"})
  } else {
    res.status(404).send({
      message: "로그인 실패"
    })
  }
})

// ==================== 일단 보관 ==================
router.post('/createBlock', (req, res) => {
  res.send(createBlock(req.body.data));
})


export default router;