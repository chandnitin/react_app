import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { cutTime: new Date() };

    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            cutTime: new Date()
        });
    }
    render() {
        return (
            <div>                
                <h1> {this.state.cutTime.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
