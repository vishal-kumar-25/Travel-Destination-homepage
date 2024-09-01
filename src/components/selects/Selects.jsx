import React from 'react'
import './Selects.css'

import destination1 from '../../assets/destination1.jpg';
import destination2 from '../../assets/destination2.jpg';
import destination3 from '../../assets/destination3.jpg';
import destination4 from '../../assets/destination4.jpg';
import destination5 from '../../assets/destination5.jpg';
import house3 from '../../assets/house3.jpg';

import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
    return (
        <div name='book' className='selects'>
            <h2>Select Your Destinations</h2>
            <div className='container'>
                <SelectsImg bgImg={destination1} text='Temples' />
                <SelectsImg bgImg={destination2} text='Mountains' />
                <SelectsImg bgImg={destination3} text='Rocks' />
                <SelectsImg bgImg={destination4} text='Budapest' />
                <SelectsImg bgImg={destination5} text='Venice' />
                <SelectsImg bgImg={house3} text='Norway' />
            </div>
        </div>
    )
}

export default Selects
