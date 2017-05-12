import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">

        <div className="row">

            <div className="col-md-4">
                <h1>We are home</h1>
                 <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                <a className="btn btn-primary btn-lg" href="#">Call to Action!</a>
            </div>
        </div>
    </div>
    );
  }


}

export default Home;
