import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3"> 
             
                <Link to='/' class="brand-logo ">
                GS Projects
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
             
        </nav>
    )
}

export default Navbar