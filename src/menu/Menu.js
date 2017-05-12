import React, { Component } from 'react';
import './Menu.css';

import { Link } from 'react-router';

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Docs">Docs</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
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
