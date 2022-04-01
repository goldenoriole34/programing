//==============< 2021-12-16 >==================
// //리액트가 이벤트를 발생시킬수있다.event를 다른 이름으로 바꿔도 됨

// function Football() {
//   const shoot = (a, e) => {
//     alert(a + ", " + e.type);
//   };

//   return(
//     <button type="button" onClick={(event)=>{shoot("The tremendese Goal Son!", event)}}>Take the Shot!</button>
//   );
// }


// export default Football;

// //arg 연습
// function Football() {
//   const shoot = (arg) => {
//     alert(arg);
//   };

//   return(
//     <button type="button" onClick={() => shoot("The tremendess Goal son!!")}>Take the Shot!</button>
//     //arg를 호출해서 사용하려면 에로우펑션 ()=>{} 형식으로 작성해야한다.
//   );
// }

// export default Football;


// //props 연습
// function Football() {
//   const shoot = () => {
//     alert("Greate Shot whit Son!");
//   };

//   return(
//     <button type="button" onClick={shoot}>Take the Shot!</button>
//   );
// }

// export default Football