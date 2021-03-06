import React, { Component } from 'react';
import './Docs.css';

import ReactMarkdown from 'react-markdown';

import HomeMd from './content/homeMD';
import IssuesMd from './content/issuesMD';
import ResidentsMd from './content/residentsMD';

class Docs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chosen: HomeMd
        };
    }

    componentDidMount() {
        let hash = window.location.hash;

        if(hash) {
            hash = hash.substring(1);
            this.changeCategory(hash);
        }
    }

    changeCategory = (cat) => {

        let selected = '';

        switch(cat) {
            case 'Home':
                selected = HomeMd;
                window.location.hash = 'Home';
            break;

            case 'Issues':
                selected = IssuesMd;
                window.location.hash = 'Issues';
            break;

            case 'Residents':
                selected = ResidentsMd;
                window.location.hash = 'Residents';
            break;

            default:
                selected = HomeMd;
        }

        this.setState({
           chosen: selected 
        });
       
    }

  render() {

    const chosen = this.state.chosen;

    return (
        <div className="container">


        <div className="row">

            <div className="col-md-2 docs-offset">
                <ul className="list-group">
                <li className="list-group-item" onClick={ () => this.changeCategory('Home') }>Home</li>
                <li className="list-group-item" onClick={ () => this.changeCategory('Residents') }>Residents</li>
                <li className="list-group-item" onClick={ () => this.changeCategory('Issues') }>Issues</li>
                </ul>
            </div>

            <div className="col-md-8">
                <h1>Docs</h1>
                <ReactMarkdown source={ chosen } />
            </div>
        </div>
    </div>
    );
  }

}


export default Docs;
