import React from 'react';
import { useState } from 'react';


export default function Couter() {
    const [increment, setIncrement] = useState(0);
    return(
    <div className='container'>
        <p>{increment}</p>
        <button className='button'onClick={()=>{
            setIncrement(increment+1);
        }}>+</button>
        <button className='button'onClick={()=> {
            setIncrement(increment-1);
        }}>-</button>
    </div>

    );
}
