import React from 'react'
import './Destinations.css'

import destination1 from '../../assets/destination1.jpg';
import destination2 from '../../assets/destination2.jpg';
import destination3 from '../../assets/destination3.jpg';
import destination4 from '../../assets/destination4.jpg';
import destination5 from '../../assets/destination5.jpg';

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className='container'>
                <h1>Plan Your Trip with SWARi Travels</h1>
                <h2>Where Would You Like To Go?</h2>
                <div className="img-container">
                  <img className='span-3 image-grid-row-2' src={destination1} alt="/" />
                    <img src={destination2} alt="/" />
                    <img src={destination3} alt="/" />
                    <img src={destination4} alt="/" />
                    <img src={destination5} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destinations