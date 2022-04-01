import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      host : 'heidi',
      test : ''
    }
  }

  componentDidMount(){
    this._dbtest();
  }

  _dbtest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data);
  }

  render() {
    return(
      <div className='App'>
        <h3>Wellcome to <u> {this.state.host}</u> Blog</h3>
      </div>
    )
  }
}

export default App;
