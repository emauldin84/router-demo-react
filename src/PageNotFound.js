import React from 'react'
import { Redirect, Link } from 'react-router-dom'

function PageNotFound() {
    return(
        <div>
            <h3>Page not found</h3>
            {/* Adds link to redirect to root */}
            <Link to="/">Click here to go home</Link>
            {/* Auto redirects to root */}
            {/* <Redirect to="/" /> */}

        </div>
    )
}


export default PageNotFound;