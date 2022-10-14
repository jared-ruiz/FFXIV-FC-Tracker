import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <div className='nav-comp-styling'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/members'>Members</Link>
                </li>
                <li>
                    <Link to='/fc-info'>FC Info</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;