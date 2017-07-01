import React, { Component } from 'react';
import './css/fullpage.css';

let isIE = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
let isFirefox = (/Firefox/i.test(navigator.userAgent));

class Fullpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        this.onWheel = this.onWheel.bind(this);
        this.onIndicatorClick = this.onIndicatorClick.bind(this);
    }

    componentDidMount() {
        const pageSize = this.props.children && this.props.children.length;
        let delta = 0;
        let isScrolling = false;

        window.addEventListener('wheel', (ev) => {
            delta = this.calcDelta(ev);
            if (delta < -this.props.sensitivity && !isScrolling && this.state.currentIndex < pageSize - 1) {
                this.setState((prevState, props) => ({
                    currentIndex: ++prevState.currentIndex
                }));
                isScrolling = true;
                setTimeout(() => {
                    isScrolling = false;
                }, this.props.duration);
            }
            if (delta > this.props.sensitivity && !isScrolling && this.state.currentIndex > 0) {
                this.setState((prevState, props) => ({
                    currentIndex: --prevState.currentIndex
                }));
                isScrolling = true;
                setTimeout(() => {
                    isScrolling = false;
                }, this.props.duration);
            }
        });
    }

    onWheel(ev) {
        ev.preventDefault();
    }

    onIndicatorClick(index) {
        this.setState({
            currentIndex: index
        });
    }

    calcDelta(ev) {
        if (isFirefox) {
            return -ev.deltaY;
        } else {
            return ev.wheelDelta;
        }
    }

    render() {
        return (
            <div className="fullpage">
                <ul className="wrapper"
                    style={{
                        transform: `translateY(${-this.state.currentIndex * 100}vh)`,
                        transition: `transform ${this.props.duration / 1000}s cubic-bezier(0.6, 0.5, 0.3, 1)`
                    }}
                    onWheel={this.onWheel}>
                    {this.props.children && this.props.children.map((child, index) => (
                        <li className="page" key={index}>{child}</li>
                    ))}
                </ul>

                {this.props.showIndicator &&
                    <ul className="indicator"
                        style={{ transform: `translateY(-50%)` }}>
                        {this.props.children && this.props.children.map((child, index) => (
                            <li className={`point ${index === this.state.currentIndex ? 'point--active' : ''}`}
                                key={index}
                                onClick={this.onIndicatorClick.bind(this, index)}>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        )
    }
}

Fullpage.defaultProps = {
    sensitivity: 30,
    duration: 800,
    showIndicator: false
}

export default Fullpage;
