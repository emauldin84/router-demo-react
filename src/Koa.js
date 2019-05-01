import React from 'react';
import { Link } from 'react-router-dom'
function Koa(props) {
    return (
        <div>
            <h1>Koa</h1>
            <ul>
                <p>
                    <Link to="/koa/ball">ball</Link>
                </p>
                <p>
                    <Link to="/koa/food">food</Link>
                </p>
                <p>
                    <Link to="/koa/bed">bed</Link>
                </p>

            </ul>
        </div>
    )
}


export default Koa;