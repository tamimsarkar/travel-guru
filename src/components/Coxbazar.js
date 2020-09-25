import React, { useState } from 'react';
import './Coxbazar.css'
import HotelsofCoxbazar from './HotelsofCoxbazar';
import coxBazarData from './coxBazarData';
const Coxbazar = () => {
    const [coxHotels, setCoxHotels] = useState(coxBazarData)
    return (
        <div className="coxbazar">
            {
                coxHotels.map(coxHotel => <HotelsofCoxbazar coxHotel={coxHotel} />)
            }
            <div>
           
            </div>
        </div>
    );
};

export default Coxbazar;