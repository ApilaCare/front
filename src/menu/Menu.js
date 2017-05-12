import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {


  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/docs">Docs</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    );
  }

}


export default Menu;
