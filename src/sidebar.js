import React, { Component } from 'react';
import './css/sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        }

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="sidebar">
                <ul>
                    {this.props.links.map((link, index) => (
                        <li key={link.name}>
                            <a href={link.url} className={index === this.state.activeIndex && 'link--active'} onClick={this.onLinkClick.bind(this, index)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Sidebar;

