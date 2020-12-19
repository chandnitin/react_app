
import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(); //
        console.log(props);  
        console.log(this.props); // without pass props in super()
        // varialbe object
        this.state={
            name:"Piter"
        }
         this.UpdateName = this.UpdateName.bind(this);
    }

// 1. state 
// 2. upstate  // normally use setState()
// 3. envent Handle => bind 
// 4. Class power full as comp Function .
// JSX => 
// ES 6 

// // React.CreateElement(
//     name: "H1",
//      id : 'nate'

// )


    UpdateName =(uname)=>{
        this.setState({name:uname});
    }
    render(){
        
        return(
        <div>
            <h1> Hello,{this.state.name}</h1>
            <button onClick={()=>{this.UpdateName("Bageshree")}}>Update</button>
        </div>
        )
    }

}

export default Header;