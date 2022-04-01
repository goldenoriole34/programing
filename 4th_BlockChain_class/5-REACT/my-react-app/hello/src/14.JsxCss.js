// //==============< 2021-12-20 >==================
//JesTest 연습 Css 적용방법, 

import React from 'react';
import Hello from './14.Hello';
import './jsxCss.css';

function JsxCss(){
  let name = 'react';
  const mystyle = {
    backgroundColor : 'blue',
    color : 'white',
    fontSize : 24, //default px단위
    padding : '1rem'
  }

  return (
    <>
    {/* == this is comment ==  jsx에서 주석처리하는 법 */}
      <h1>Hello World</h1>
      <Hello />
      <div style={mystyle}>{name}</div>
      <div className='pink-box'></div>
    </>
  );

}

export default JsxCss;