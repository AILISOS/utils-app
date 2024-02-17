import React from 'react';
import axios from 'axios';


const fetchRandomData = () => {
    return axios.get('https://randomuser.me/api') 
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);
    })
}
export default function Json() {
    
    return(
        <div>
            <button onClick={()=> {
                fetchRandomData();
            }}>getRandomData</button>
        </div>
    );
}