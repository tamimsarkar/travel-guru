import React from 'react';
import './Hotels.css'
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const HotelsOfSazek = (props) => {
    const {title,des,img,price,rating,key} = props.hotel
    return (
        <div className="hotel">
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
        <Link to={'/book-hotel/' + key} className="explore__button">Explore</Link>
        </div>
    </div>
    );
};
export default HotelsOfSazek;