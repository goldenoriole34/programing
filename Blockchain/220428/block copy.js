// 블록체인 관련 함수
// 블록 구조 설계
/*
    블록의 구조?
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값 (블록의 유일성)
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조) 블록을 타고타고 가다보면 geneiss 블록이 나온다.
*/
import CryptoJS from 'crypto-js';
import random from 'random';

class Block { // Block 의 구조 정리
    constructor(index, data, timestamp, hash, previousHash, difficulty, nonce)
    {
        this.index = index;
        this.data = data; // 외부에서 넣어준다.
        this.timestamp = timestamp // 블록이 만들어질때 현재시간가지고 넣어준다.
        this.hash = hash; // 직접 계산을 해줘야 한다.
        this.previousHash = previousHash; // 외부요인에 의해 결정이된다. 
        this.difficulty = difficulty; // 숫자에 따라서 0을 몇개 확인할 건지
        this.nonce = nonce;
    }
}

// function getBlocks() {
//     return blocks;   
// }

const getBlocks = () => {
    return blocks;   
}

const getLatestBlock = () => {
    return blocks[blocks.length - 1];
}
// Hash 계산
const calculateHash = (index, data, timestamp, previousHash, difficulty, nonce) => { // 일반적으로는 index,data,timestmap,previousHash 값을 합해서 암호화를 한 형태로 만든다.
    return CryptoJS.SHA256 ((index + data + timestamp + previousHash + difficulty + nonce).toString()).toString(); // sha256알고리즘으로 암호화를 한다.
    // return CryptoJS.SHA256((2).toString()).toString(); 
}

// 0 하나도 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다.  >> 난이도 업 / 0하나값을 찾는다고해서 2개값의 힌트가 되지는 않는다.
// 0 두개 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다. 
// 16진수 64자리
// 16진수 1자리 -> 2진수 4자리 256개의 0과 1 로 표현



// genesis 블록을 만들때 다른값으 전부 똑같고 시간이 달라진다.
const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The times 03/Jan/2009 Chancellor on brink of second bailout for banks', 0, 0, 0, 0, 0);

    genesisBlock.hash = calculateHash(
            genesisBlock.index, 
            genesisBlock.data, 
            genesisBlock.timestamp, 
            genesisBlock.previousHash,
            genesisBlock.difficulty,
            genesisBlock.nonce
            );
    return genesisBlock;
}

// 만들고 나서 담아준다.

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length -1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextDifficulty = 1;
    const nextNonce = findNonce(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty);  
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty, nextNonce);
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash, nextDifficulty, nextNonce);

    return newBlock;

}
// 새로운 노드에 연결 됫을때 다른사람의 블록체인을 확인해서 그사람이 더 길면 바꾸고 아니면 바꾸지 않는다.
const addBlock = (newBlock, previousBlock) => {
    if (isValidNewBlock(newBlock, previousBlock)) {
        blocks.push(newBlock);
        return true;
    }
    return false;
}

// 블록의 무결성 검증
/*
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전 블록의 hash이다.
    블록의 구조가 일치해야 한다.
*/

const isValidBlockStructure = (newBlock) => {
    if  (typeof (newBlock.index) === 'number' 
        &&  typeof (newBlock.data) === 'string'
        &&  typeof (newBlock.timestamp) === 'number'
        &&  typeof (newBlock.hash) === 'string'
        &&  typeof (newBlock.previousHash) === 'string'
        &&  typeof (newBlock.difficulty) === 'number'
        &&  typeof (newBlock.nonce) === 'number')
        {
            return true;
        }
            return false;
}

const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1) // !== type까지 같이 검사
    {
        console.log('invalid index');
        return false;
    } 
    else if (newBlock.previousHash !== previousBlock.hash) 
    {
        console.log('invalid previous hash');
        return false;
    }
    else if (isValidBlockStructure(newBlock) == false) 
    {
        console.log('invalid block structure');
        return false;
    }

    return true;
}

// 문재 해결을 검사하는 함수
const hashMatchDifficulty = (hash, difficulty) => { // hash 16진수 64자리 16진수를 2진수로 바꾸는 작업을 먼저 해줘야한다.
    const binaryHash = hexToBinary(hash); // 어떤 함수(hexToBinary)를 통해서 16진수를 2진수로 바꾸는 함수를  만들어 줘야한다.
    const requiredPrefix = '0'.repeat(difficulty); // repeat()함수를 통해서 0을 반복한다. 0의 갯수는 difficulty에 의해서 결정된다.

    return binaryHash.startsWith(requiredPrefix); //startWith 문자열일때 나오는 함수
}

const hexToBinary = (hex) => {
    // 바꿔야하는 값과 결과가 1대1로 되게끔 한다. 16진수는 0~f 까지있고  0을 2진수로 바꾸면 0000 f를 2진수로 바꾸면 1111
    const lookupTable = {
        '0' : '0000', '1' : '0001', '2' : '0010', '3' : '0011',
        '4' : '0100', '5' : '0101', '6' : '0110', '7' : '0111', 
        '8' : '1000', '9' : '1001', 'a' : '1010', 'b' : '1011',
        'c' : '1100', 'd' : '1101', 'e' : '1110', 'f' : '1111', 
    }

    // 03cf
    // 0000001111001111
    let binary = '';
    for(let i = 0; i < hex.length; i++)
    {
        if (lookupTable[hex[i]]) { //hex의 0번째는 0을 가르키는것 
            binary += lookupTable[ hex[i]];
        }
        else
        {
            console.log('invalid hex : ', hex);
            return null;
        }
    }

    return binary;
}
// nonce는 들어갈 필요가 없다. 
const findNonce = (index, data, timestamp, previousHash, difficulty) => { // finNonce하는 시점에서 매개변수로 받아온다. finNonce하는 시점은 isValidNewBlock blocks.push(newBlock)하는 시점이다.
    let nonce = 0; // nonce값은 여기서 선언해준다.

    while(true) 
    {
        let hash = calculateHash(index, data, timestamp, previousHash, difficulty, nonce); //calculateHash를 계산할때.
    
        if (hashMatchDifficulty(hash, difficulty))  //true 나오면 문제의 해결 답을 찾는다. 어떤 hash값이 있고 difficulty 찾는 것은 nonce이다.
        {
            return nonce;
        }
        nonce++; //원하는 값이 아니면 nonce를 키워서 원하는 값이 나올때 까지 반복
    }
}

const isValidBlockchain = (receiveBlockchain) => {
    // 같은 제네시스 블록인가
    if (JSON.stringify(receiveBlockchain[0]) !== JSON.stringify(getBlocks()[0])){
        console.log('같은 제네시스 블록이 아님');
        console.log(receiveBlockchain[0]);
        console.log('-------------------------')
        console.log(getBlocks()[0]);
        return false;
    }

    // 체인 내의 모든 블록을 확인
    for (let i = 1; i < receiveBlockchain.length; i++)
    {
        if (isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i - 1]) == false)
        {
            console.log(i - 1, '번 블록과 ', i, '번 블록이 문제');
            console.log(receiveBlockchain[i - 1]);
            console.log(receiveBlockchain[i]);
            return false;
        }
    }
    console.log('블록체인 확인 완료')
    return true;
}

const replaceBlockchain = (receiveBlockchain) => {
    const newBlocks = JSON.parse(receiveBlockchain);
    console.log(newBlocks);
    if (isValidBlockchain(newBlocks))
    {
        //let blocks = getBlocks();
        if (newBlocks.length > blocks.length)
        {
            console.log('받은 블록체인 길이가 길다');
            blocks = newBlocks;
        }
        else if (newBlocks.length == blocks.length && random.boolean())
        {
            console.log('받은 블록체인 길이가 같다');
            blocks = newBlocks;
        }
    }
    else {
        console.log('받은 블록체인에 문제가 있음');
    }
}

let blocks = [createGenesisBlock()]; 

export { getBlocks, getLatestBlock, createBlock, addBlock, isValidNewBlock, replaceBlockchain  } ;