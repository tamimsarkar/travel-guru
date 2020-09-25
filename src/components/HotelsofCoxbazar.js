import React from 'react';
import './Hotels.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link, useHistory } from 'react-router-dom';
const HotelsofCoxbazar = (props) => {
    const {key,title,des,price,rating,img} = props.coxHotel;
  const history = useHistory()
    const handleHistory = () => {
        history.push('/book-hotel/' +key)
    }
    return (
        <div className='hotel'>
           <img src={img} alt=""/>
            <div className='hotel__info'>
            <p>{title}</p>
            <small>{des}</small>
            <p className='hotel__price'>{price} Tk/night</p>
            <div className='hotel__rating__price'>
            <div className='hotel__rating'>
                {
                    Array(rating)
                    .fill()
                    .map(_ => <p>⭐</p>)
                }
                </div>
                <FavoriteBorderIcon />
            </div>
            <Link onClick={handleHistory} className="explore__button">Explore</Link>
            </div>
        </div>
    );
};

export default HotelsofCoxbazar;