import React, { Component } from 'react';
import './css/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                {this.props.contact}
            </div>
        )
    }
}

export default Footer;

