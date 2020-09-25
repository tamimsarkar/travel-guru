import React, { useState } from 'react';
import HotelsofSreemangal from './HotelsOfSreemangal';
import sreemangalData from './sreemangalData';
import './Sreemangal.css'
const Sreemangal = () => {
      const [sreemangalHotels, setSreemangalHotels] = useState(sreemangalData)
    return (
        <div className="sreemangal">
          <h2>Stay nearby</h2>
          <p>Stay</p>
            {
                  sreemangalHotels.map(sreemangalHotel => <HotelsofSreemangal sreemangalHotel={sreemangalHotel} />)
            }
          
               
        </div>
    );
};

export default Sreemangal;