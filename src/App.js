import React, { Component } from 'react';

import './App.css';
import Menu from './menu/Menu';

class App extends Component {
  render() {

    const { main, sidebar} = this.props;

    return (
      <div>
        <div>
          <Menu />
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
