// p2p 서버 초기화, 사용
// http 서버 초기화, 사용
// 블록체인 함수 사용
import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";

// process.env.HTTP_PORT를 쓰는 이유 외부에서 쉽게 제어 할 수 있다. 
const httpPort = parseInt(process.env.HTTP_PORT) || 3001; 
const p2pPort = parseInt(process.env.HTTP_PORT) || 6001; 
const p2pPort6002 = 6002; 
const p2pPort6003 = 6003; 
// 환경변수 

initHttpServer(httpPort);
initP2PServer(p2pPort);
// initP2PServer(p2pPort6002);
// initP2PServer(p2pPort6003);
