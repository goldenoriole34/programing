import './App.css';
import { Box } from './component/Box';
import { useState } from 'react';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼클릭 시 클릭값 박스에 출력
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 3. 4번의 결과로 승패 결정
// 6. 결과에 따른 테두리 (승-초록, 패-빨강, 무-검정) 

const choice = {
  rock: {
    name : "Rock",
    img : "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
  },
  scissors: {
    name : "Scissors",
    img : "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s"
  },
  paper: {
    name : "Paper",
    img : "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}

function App() {
  
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect ] = useState(null)
  const [userResult, setUserResult] = useState("")
  const [computerResult, setComputerResult] = useState("")
  const [userClassName, setUserClassName] = useState("box_tie")
  const [computerClassName, setComputerClassName] = useState("box_tie")

  const paly = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setUserResult(judgementUser(choice[userChoice], computerChoice))
    setComputerResult(judgementComputer(choice[userChoice], computerChoice))
    setUserClassName(judgementUser(choice[userChoice], computerChoice))
    setComputerClassName()
  }

  const userBorderChange = () => {
    if(userResult == "TIE")return "box_tie"
    else if (userResult == "WIN") return "box_win"
    else if (userResult == "LOSE") return "box_lose"
  }
  const computerBorderChange = () => {
    if(computerResult == "TIE") return "box_tie"
    else if (computerResult == "WIN") return "box_win"
    else if (computerResult == "LOSE") return "box_lose"
  }

  const randomChoice = () =>{
    let itemArray = Object.keys(choice)
    let randomNum = Math.floor( Math.random() * itemArray.length )
    let final = itemArray[randomNum]
    return choice[final]
  }

  const judgementUser = (user, computer) => {
    //가위바위보 알고리즘
    if(user.name == computer.name) return "TIE"
    else if (user.name == "Rock") return computer.name == "Scissors" ? "WIN" : "LOSE"
    else if (user.name == "Scissors") return computer.name == "Paper" ? "WIN" : "LOSE"
    else if (user.name == "Paper") return computer.name == "Rock" ? "WIN" : "LOSE"
  }

  const judgementComputer = (user, computer) => {
    if(user.name == computer.name) return "TIE"
    else if (user.name == "Rock") return computer.name == "Scissors" ? "LOSE" : "WIN"
    else if (user.name == "Scissors") return computer.name == "Paper" ? "LOSE" : "WIN"
    else if (user.name == "Paper") return computer.name == "Rock" ? "LOSE" : "WIN"
  }

  return (
    <>
      <div className="main">
        <Box class={userClassName} title="You" item={userSelect} result={userResult}/>
        <Box class={computerClassName} title="Computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className="main">
        <button onClick={()=>{paly("scissors")}}>가위</button>
        <button onClick={()=>{paly("rock")}}>바위</button>
        <button onClick={()=>{paly("paper")}}>보</button>
      </div>
    </>
  );
}

export default App;
