import React, { Component } from 'react';
import './css/letters.css';

class Letters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: ''
        };
    }

    componentDidMount() {
        if (!this.props.letters) {
            return;
        }
        this.timerID = setInterval(() => {
            this.setState((prevState, props) => {
                let currentIndex = 0;

                if (prevState.letters.length === props.letters.length) {
                    clearInterval(this.timerID);
                    return;
                }
                for (let i = prevState.letters.length; i < props.letters.length; i++) {
                    if (props.letters.slice(i, i + 1) !== ' ') {
                        currentIndex = i;
                        break;
                    }
                }
                return {
                    letters: props.letters.slice(0, currentIndex + 1)
                };
            });
        }, 400);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <span className="letters">
                {this.state.letters}
                {/*{[...this.state.letters].map((letter, index) => (
                    <span className="letter" key={index}>{letter}</span>
                ))}*/}
                <span className="cursor">_</span>
            </span>
        );
    }
}

export default Letters;
