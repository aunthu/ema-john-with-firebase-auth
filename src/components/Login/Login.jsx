import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../UserAuthProviders/UserAuthProviders';

const Login = () => {
    const [error, setError]=useState('');
    const [show, setShow]=useState(true);
    const {signIn}=useContext(UserAuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location); 
    const from= location.state?.from?.pathname||'/'
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        setError('');
        signIn(email,password)
         .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
            event.target.reset();
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Form</h2>
            <form action="" onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"  required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show?'password':'text'} name="password"  required />
                </div>
                <p onClick={()=>setShow(!show)}><small>{show?'Show password':'Hide password'}</small></p>

                <input type="submit" value="login" className='btn-submit' />
            </form>
            <p><small>New to Ema-john? 
                <Link to='/signup'>Sign Up</Link></small></p>
            <p className='text-red'>{error}</p>
        </div>
    );
};

export default Login;