import React from "react";
import { Link } from 'react-router-dom'

const  Home= () => {
    return (
        <div style={{textAlign: 'center'}}>
        <h1>List of random things</h1>
        <ul>
            <li><Link to="/Counter">Counter</Link></li>
            <li><Link to="/Json">Json</Link></li>
            <li><Link to="/JsonString">JsonString</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/Board">TicTac</Link></li>
        </ul>
        </div>
    )
}
export default Home