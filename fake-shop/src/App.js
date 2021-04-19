import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
