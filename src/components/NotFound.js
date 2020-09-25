import React from 'react';
import notFound from '../images/notFound.jpg'
const NotFound = () => {
    const imageStyle = {
        height: '300px'
       
       }
    return (
        <div style={{height: '87vh',display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundColor:'#EDEDED'}} className="notFound">
            <img style={imageStyle} src={notFound} alt=""/>
        </div>
    );
};

export default NotFound;