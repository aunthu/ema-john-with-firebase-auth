import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { UserAuthContext } from '../UserAuthProviders/UserAuthProviders';
const SignUp = () => {
    const {createUser}=useContext(UserAuthContext);
    const [error,setError]=useState('');
    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirm=event.target.confirm.value;
        console.log(email, password, confirm);
        setError('')
        if(password!==confirm){
            setError('Password didnot match')
            return ;
        }

        else if(password.length<6){
            setError('Password must be more than 6 characters.')
            return;
        }

        createUser(email, password)
         .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            event.target.reset();
         })
         .catch(err=>{
            console.log(err.message);
            setError(err.message);
         })



    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-red'>{error}</p>
        </div>
    );
};

export default SignUp;