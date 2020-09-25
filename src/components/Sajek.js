import React, { useState } from 'react';
import HotelsOfSazek from './HotelsOfSazek';
import sajekData from './sajekData'
import './Sajek.css'
const Sajek = () => {
    const [hotels, setHotels] = useState(sajekData)
    return (
        <div>
            {
                hotels.map(hotel => <HotelsOfSazek key={hotel.key} hotel={hotel}></HotelsOfSazek>)
            }
        
        </div>
    );
};

export default Sajek;