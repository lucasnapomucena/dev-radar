import React, { useState } from 'react';
import Header from './Header';
//component
//state
//propriedade

function App() {

    let [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    return ( 
    <>
        <Header />
        <h1> Contador: {counter} </h1> 
        <button onClick = { incrementCounter } > Incrementar </button> 
        
    </>
    )
}

export default App;