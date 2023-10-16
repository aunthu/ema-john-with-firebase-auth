import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { UserAuthContext } from '../UserAuthProviders/UserAuthProviders';

const Header = () => {
    const [error, setError]= useState('')
    const {user, logOut}=useContext(UserAuthContext);
    console.log(user);
    const handleLogOut=()=>{
        logOut()
         .then((result)=>{})
         .catch(err=>{
            console.log(err.message);
            setError(err.message);
            
         })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                {user&& <span className='text-white'>Welcome, { user.email} <button className='text-white' onClick={handleLogOut}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;