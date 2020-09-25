import React, { useContext } from 'react';
import './Header.css'
import logo from '../images/Logo.png';
import { Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const Header = () => {
    
  const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt=""/>
            </Link>
            <div className="header__login">
                <p>Become a host</p>
                {loggedUser.email ?
                 <button variant="outlined" style={{backgroundColor:'#fff',color:'#111',marginLeft:'5px'}} onClick={()=>setLoggedUser({})}>Logout</button>
                 : <Link className="login__button" to ='/login-page' >Login</Link>
                
                }
                <p className="username">{loggedUser.name}</p>
                <Avatar className="header__avatar" src={loggedUser.photo} />
                {loggedUser.email ? <span style={{marginLeft:'5px'}}>{loggedUser.email}</span> : ''}
            </div>
        </div>
    );
};

export default Header;