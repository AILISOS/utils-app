import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


const fetchRandomData = () => {
    return axios.get('https://randomuser.me/api')
    .then(({data}) =>{ //destructuring assignment syntax
        console.log(data);
        return JSON.stringify(data, null, 2);
    })
    .catch(err=>{
        console.log(err);
    })
}



export default function JsonString() {
    const [randomUserData, setRandomUserData] = useState('');
    useEffect(() => {
        fetchRandomData().then(randomData => {
            setRandomUserData(randomData || 'No user data found');
        })
    }, []);
    return(
    <p className='container'>{randomUserData}</p>
    )
}