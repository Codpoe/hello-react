import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <h1 className="title">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Header;

