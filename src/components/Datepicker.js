import { People } from '@material-ui/icons';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Datepicker.css'
const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date ())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange ={
        startDate : startDate,
        endDate : endDate,
        key : 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    const [heart,setHeart] = useState('')
    
    return (
        <div className='datepicker'>
            <DateRangePicker 
            ranges={[selectionRange]} onChange={handleSelect}
            />

                <span className='span'>Origin</span>
            <div className="origin">
                <input className='input__value' type="text" placeHolder='example(DHAKA)'/>
            </div>
                <span className='span'>Total Room</span>
           <div className="rooms">

                <input className="input__value" type="number" defaultValue={2}/>
                <People onClick={() => setHeart(heart ? '' : 'primary')} color={heart} />
           </div>
           </div>
        
    );
};

export default Datepicker;