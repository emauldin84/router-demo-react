import React from 'react';
import { Link } from 'react-router-dom'
function Koa(props) {
    return (
        <div>
            <h1>Koa</h1>
            <ul>
                <li>
                    <Link to="/koa/ball">ball</Link>
                </li>
                <li>
                    <Link to="/koa/food">food</Link>
                </li>
                <li>
                    <Link to="/koa/bed">bed</Link>
                </li>

            </ul>
        </div>
    )
}


export default Koa;