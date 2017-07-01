import React, { Component } from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Main from './main.js';
import Footer from './footer.js';
import Letters from './letters.js';
import Fullpage from './fullpage.js';

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
                {/*<Letters letters=""/>*/}
                <Fullpage showIndicator orientation="horizontal">
                    <div style={{width: `100%`, height: `100%`, background: `url('https://ws2.sinaimg.cn/large/006tNc79gy1fh4q4fdvsgj31kw11xx25.jpg')`}}></div>
                    <div style={{width: `100%`, height: `100%`, background: `url('https://ws4.sinaimg.cn/large/006tNc79gy1fh4q4ch9pjj31kw0rch6d.jpg')`}}></div>
                    <div style={{width: `100%`, height: `100%`, background: `url('https://ws2.sinaimg.cn/large/006tNc79gy1fh4q4fdvsgj31kw11xx25.jpg')`}}></div>
                </Fullpage>
            </div>
        )
    }
}

export default App;