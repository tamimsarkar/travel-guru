import React from 'react';
import Header from './Header';
import './Home.css'
import sajek from '../images/CardImage/Sajek.png'
import coxBazar from '../images/CardImage/coxbazar.jpg'
import sreemangal from '../images/CardImage/Sreemongol.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
    <div className="home">
       <Header />
       <h2>Its time for Bangladesh,GO Ahead </h2>
       <p>Book the famouse Place.</p>
       <div className="cards">
           
       <Link to='/coxbazar'>
           <div className="destination">
                
                    <img src={coxBazar} alt=""/>
                    <h2>COX'S BAZARD</h2>
               
           </div>
           </Link>

               <Link to='/sajek'>
            <div className="destination">
                    <img src={sajek} alt=""/>
                    <h2>SAJEK VALLAY</h2>
           </div>
               </Link>

               <Link to="/sreemangal">
           <div className="destination">
                    <img src={sreemangal} alt=""/>                   
                    <h2>SREEMANGAL</h2>
            </div>
                </Link>
        </div>
     </div>
    );
};

export default Home;