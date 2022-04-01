// //==============< 2021-12-16 >==================
//map() 루프타입으로 가져오기 연습1

function Gundam(props) {
  return <li>This is {props.id + " : " + props.model}</li>;
}

function Archangel(){
  const gundams = [
    {id: 1, model: "ZNGF-X10A Freedom Gundam"},
    {id: 2, model: "ZNGF-X109 Freedom Gundam"},
    {id: 3, model: "Sword Strike Gundam"}
  ];

  return (
    <>
      <h1>Which Gundam lives in Archangel?</h1>
      <ul>
        {gundams.map((mobileSuite)=><Gundam key ={mobileSuite.id} model={mobileSuite.model}/>)}
      </ul>
    </>
  );
}

export default Archangel;


// //map 활용하여 ul/li를 loop형식으로 작성

// function Gundam(props) {
//   return <li>This is {props.model}</li>
// }

// function Archangel(){
//   const gundamList =
//     [
//       "ZNGF-X10A Freedom Gundam",
//       "ZNGF-X109 Freedom Gundam",
//       "Strike Gundam"
//     ];

//   return(
//     <>
//       <h1>Which Gundam lives in Archangel</h1>
//       <ul>
//         {gundamList.map((robot) => <Gundam model={robot} />)}
//       </ul>
//     </>
//   );
// }
// export default Archangel;

// //props 받는법 연습2
// function Gundam(props){
//   return <h1>This is {props.model} Gundam</h1>
// }

// export default Gundam;

// //props 받는법 연습
// function Gundam(props){
//   return <h1>This is {props.model}</h1>
// }

// function Archangel(){
//   return(
//     <>
//     <h1>Which gundam in Archangel?</h1>
//     <Gundam model="ZGMF-X10A"/>
//     </>
//   )
// }
// export default Archangel;


// //Gundam ginfo={gundamInfo}
// function Gundam(props){
//   return <h1>This is {props.ginfo.model}</h1>
// }

// function Archangel(){
//   const gundamInfo = {
//     camp : "Earth",
//     model : "X109",
//     engine : "Atomic",
//     year : "Cosmic 70",
//     pilot : "Kira Yamato"
//   };

//   return(
//     <>
//       <h1>Which gundam in Archangel?</h1>
//       <Gundam ginfo={gundamInfo} />
//     </>
//   );

// }
// export default Archangel;


// //==============< 2021-12-15 >==================

// //방법2 state 변경
// import React from "react";

// class Gundam extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       camp : "Earth",
//       model : "X108",
//       engine : "Atomic",
//       year : "Cosmic 70",
//       pilot : "Yamato"
//     };
//   }
//   //getDerivedStateFromProps() {}
//   changeModel = () => {
//     this.setState({ model : "X109 Justice" });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.model}</h1>
//         <h2>The camp is {this.state.camp}</h2>
//         <h2>The engine is {this.state.engine}</h2>
//         <h2>The pilot Name is {this.state.pilot}</h2>
//         <h2>{this.state.year} Space Centry</h2>
//         <h2>The Cargo is {this.props.cargo}</h2>
//         <button type="button" onClick={this.changeModel}>Change Model</button>
//       </div>
//     );
//   }
//   //componantDidMount()

// }

// export default Gundam;

// //방법2 state 활용
// import React from "react";

// class Gundam extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       camp : "Earth",
//       model : "X108",
//       engine : "Atomic",
//       year : "Cosmic 70",
//       pilot : "Yamato"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.model}</h1>
//         <h2>The camp is {this.state.camp}</h2>
//         <h2>The engine is {this.state.engine}</h2>
//         <h2>The pilot Name is {this.state.pilot}</h2>
//         <h2>{this.state.year} Space Centry</h2>
//         <h2>The Cargo is {this.props.cargo}</h2>
//       </div>
//     );
//   }
// }

// export default Gundam;

//방법1
// import React from "react";

// class Gundam extends React.Component{
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h1>This gundam is {this.props.model}!!!</h1>
//   }
// }

// export default Gundam;