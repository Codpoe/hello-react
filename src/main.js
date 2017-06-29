import React, { Component } from 'react';
import './css/main.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Main;

