import React, { useState } from 'react';
import './Hotels.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
const HotelsOfSreemangal = (props) => {
const {price,rating,img,title,key} = props.sreemangalHotel;
const history = useHistory()
const handleHistory = () => {
    history.push('/book-hotel/' +key)
}
    return (
        <div className="hotel">
            <img src={img} alt=""/>
            <div className='hotel__info'>
            <p>{title}</p>
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
            <Button onClick={handleHistory} className="explore__button">Explore</Button>
            </div>
        </div>
    );
};

export default HotelsOfSreemangal;