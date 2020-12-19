import React,{useState} from 'react';

 export default function Profile(){   // hooks state less  state less
     // object ES6 const  
    const state ={ 
        name:"D",
        name2:"B"
    }
    const [count ,setCount]=useState(100);
     function Show(){
        alert('Hi....')
        Show1();
     }
     function Show1(){
        console.warn(1); // script konachi vat nahi pahat VIP koni execute next line script

        setInterval(() => { //  tu yete ki mi jau
            console.warn(2)
        }, 3000);
        
        console.warn(3);

        // Hooks Update
        setCount(count+1); // count
     }

    return(
    <div>{state.name} {state.name2}
    <h1>Hooks {count}</h1>
    <button onClick={Show}>Click Me</button>
    
    </div>
    )

}