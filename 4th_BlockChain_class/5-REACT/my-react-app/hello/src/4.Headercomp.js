//getSnapshotBeforUpdate() (짝) componentDidUpdate() 활용  //꼭 같이 써야함
import React from "react";

class Headercomp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {headertitle: "This is my page of header"};
  }

  componentDidMount() {    //reder 후 함수실행
    setTimeout(() => {     //reder 실행 시 함수작동
        this.setState({headertitle : "componentDidMount title!!!"});
      }, 5000);
    }

    //5초 뒤 값을 바꿀거니 바꾸기 값 저장하여 div1에 표시
  getSnapshotBeforeUpdate(prevProps, prevState) {    //얘가 없는건 에러가 나지 않음 업데이트 되기 전 상태를 가져올 수 있음
    document.getElementById("div1").innerHTML =
    "Before update title is " + prevState.headertitle + ", Before update newTitle is " + prevProps.newTitle;
  }

    //업데이트 값을 div2에 저장
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The Update title is " + this.state.headertitle;
  }

  render() {
    return (
      <div>
        <h1>{this.state.headertitle}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Headercomp;

// //getDerivedStateFromProps 활용2
// import React from "react";

// class Headercomp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {headertitle: "This is my page of header"};
//   }

//   // static getDerivedStateFromProps(props, state){
//   //   return {headertitle : props.newTitle};
//   //   // state.headertitle = props.newTitle;
//   //   // return (state.headertitle);
//   // }

//   changeHeaderTitle = () => {
//     this.setState({headertitle : "changeHeaderTitle"});
//   };

//   shouldComponentUpdate() {
//     return true;
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.headertitle}</h1>
//         <button type="button" onClick={this.changeHeaderTitle}>Change Title</button>
//       </div>
//     );
//   }
  
// }

// export default Headercomp;

// //componentDidMount 활용
// import React from "react";

// class Headercomp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {headertitle: "This is my page of header"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({headertitle : "componentDidMount title!!!"});
//     }, 5000);
//   }

//   render() {
//     return (<h1>{this.state.headertitle}</h1>);
//   }
  
// }

// export default Headercomp;


// //getDerivedStateFromProps 활용
// import React from "react";

// class Headercomp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {headertitle: "This is my page of header"};
//   }

//   static getDerivedStateFromProps(props, state){
//     return {headertitle : props.newTitle};
//     state.headertitle = props.newTitle;
//     return (state.headertitle);
//   }

//   render() {
//     return (<h1>{this.state.headertitle}</h1>);
//   }
  
// }

// export default Headercomp;

//=======================================================

//component 활용
// import React from "react";

// class Headercomp extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       headertitle : "This is My page of Header"
//     }
    
//   }
//     render() {
//       return (<h1>{this.state.headertitle}</h1>);
//     }
  
// }

// export default Headercomp;