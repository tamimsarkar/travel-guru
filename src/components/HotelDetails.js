import React , {useState} from 'react';
import { useParams } from 'react-router';
import './HotelDetails.css'
import { Button } from '@material-ui/core';
import Datepicker from './Datepicker';
const HotelDetails = () => {
    const [booking,setBooking] = useState(false)
    const {hotelkey} = useParams()
    // const hotel = fakeData.find(hotel => hotel.key === hotelkey)
    
    // handle button
    const handleDataPicker = () =>  {
        setBooking(!booking)
    }
    return (
        <div className="hotel__booking">
            
            <Button variant="outlined" className='booking__button' onClick={handleDataPicker}>{!booking ? 'Show' : 'Hide'} Booking Form</Button>
            {booking && <Datepicker />}
         
         
         <div className="benefit">
            <div className="benefit__card">
                <img src="https://image.freepik.com/free-vector/people-using-5g-internet-innovative-technologies-illustration_169479-1.jpg" alt=""/>
                <h5>Free Internet Connection</h5>
                <p className='benefit__des'>Internet is a thing that you do not want to spend the day without it.That is why we are offering this facility.</p>
            </div>

            <div className="benefit__card">
                <img src="https://ayozon.com.bd/upload/hall/1542888638512.jpg" alt=""/>
                <h5>Available Convention Hall</h5>
                <p className='benefit__des'>A convention center  is a large building that is designed to hold a convention.</p>
            </div>

            <div className="benefit__card">
                <img src="https://static.toiimg.com/photo/77705127.cms" alt=""/>
                <h5>Available Tourism</h5>
                <p className='benefit__des'>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting.</p>
            </div>

         </div>
              
        </div>
       
    );
};

export default HotelDetails;