// //2021-12-14

// //함수사용
// import React from "react";

// function Car(props) {
//   return <h2>This is my {props.color} Car!!!</h2>
// };

// function Garage() {
//   return (
//     <>
//       <h1>My Garage in the wich car!!!</h1>
//       <Car />
//     </>
//   );
// }

// export default Garage;

// //Class 사용
// import React from "react";

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color : "red"};
//   }
//   render() {
//     // return <h1>This is my {this.state.color} Car</h1>;  //방법1
//     return <h1>This is my {this.props.color} Car</h1>
//   }
// }

// export default Car;