import React, { Component } from 'react'

export default class DemoC extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                    <h2>Hello , {this.props.name} This is Class commponent </h2>
            </div>
        )
    }
}
