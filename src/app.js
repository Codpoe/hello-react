import React, { Component } from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Main from './main.js';
import Footer from './footer.js';
import Letters from './letters.js';

import './css/app.css';

let links = [
    {
        url: '#',
        name: 'First Link'
    },
    {
        url: '#',
        name: 'Second Link'
    },
    {
        url: '#',
        name: 'Third Link'
    },
    {
        url: '#',
        name: 'Fourth Link'
    }
];

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="app">
                {/*<Header title="Hello React"></Header>
                <div className="content">
                    <Sidebar links={links}></Sidebar>
                    <Main>
                        Hello World
                    </Main>
                </div>
                <Footer contact="Gmail: codpoe.me@gmail.com"></Footer>*/}
                <div className="horizon-lines"></div>
                <Letters letters="Hello"/>
            </div>
        )
    }
}

export default App;