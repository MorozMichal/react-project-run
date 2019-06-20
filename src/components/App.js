import React, { Component } from 'react';
import Previews from './Previews/Previews'
import Home from './Home/Home'
import './style.scss';

class App extends Component {
  state = {

  }

  render() {

    return (
      <>
        <Home />
        <Previews />
      </>
    )
  }
}
export default App;
