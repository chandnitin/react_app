import React, { Component, PureComponent } from 'react'
import Header from './Header';
export default class LifeCy extends PureComponent {  // Component   purecomponet update hoil tr teva re-render hotil
    constructor(){ // component initializa
        super()
        console.warn("constructor");
        this.state={
            count: 0,
            active:true
        }
        this.Jadu=this.Jadu.bind(this);
    }

    componentDidMount(){  // Ajax call not point  I.V Q API fetch
                            // component completly mount tayar honar 
        console.warn("componentDidMount");
    }
    // componentWillMount(){
    //     console.warn("componentWillMount");  // not use depricate for security per
    // }


    componentWillUpdate(){ // component update honar means state/props update hoil 
        console.warn("componentWillUpdate");
    }
    componentWillUnmount(){
      alert('ok')
    }
    Jadu(){
        //this.setState({count:this.state.count+1});

        this.setState({active:!this.state.active});
    }
    render() {
        // born/
        console.warn("render");

        return (
            <div>
                {
                    this.state.active ?
                        <Header />
                    :
                    null

                }
                
                <h1>LIFE CYLCE- {this.state.count}</h1>
                <button onClick={()=>{this.Jadu()}}>Click me</button>
            </div>
        )
    }
}
