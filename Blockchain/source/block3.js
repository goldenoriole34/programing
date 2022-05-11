// 블록체인 관련 함수
// 블록 구조 설계
/*
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256값 (블록의 유일성 )
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조)
*/

import CryptoJS from 'crypto-js'

class Block {       // 블록의 구조를 정리
    constructor(index, data, timestamp, hash ,previousHash)
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}


const getBlocks = () => {       // 외부에서 볼수있게
    return blocks;
}

const calculateHash = (index, data, timestamp, previousHash) => {       // hash만드는 함수
    // return CryptoJS.SHA256(index + data + timestamp + previousHash).toString();
    return CryptoJS.SHA256((index + data + timestamp + previousHash).toString()).toString();
}

const creatGenesisBlock = () => {       // 제네시스 블록 만드는 함수
    const genesisBlock = new Block(0, 'The Times 03/jan/2009 Chancellor on brink of second bailout for banks', new Date().getTime() / 1000, 0, 0)
    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash);

    return genesisBlock;
}

const blocks = [creatGenesisBlock()];      // 만들어진 블록을 저장할 배열 제니시스 블록이나 만들어질 블록

const createBlock = (blockData) => {        // 블록을 만드는 함수
    const previousBlock = blocks[blocks.length -1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash)
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash);

    blocks.push(newBlock)
    return newBlock;
}



export { getBlocks, createBlock }