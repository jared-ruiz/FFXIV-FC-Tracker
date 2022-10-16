import React from 'react';
import background from '../../assets/images/ff14-concept.jpg';

const Home = () => {
    return (
        <div className='home-component-styling'>
            <div className='image-overlay'></div>
            <img src={background} id='home-background-image'/>
            <div className='home-greeting'>
                <h1>Welcome</h1>
            </div>
        </div>
    )
}

export default Home;