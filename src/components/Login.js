import React from 'react';
import './Login.css';

function Login() {
    return(
        <>
               <form className='Signupform'>
                   <label>Email :</label>
                   <input placeholder='@xxx.com' type='email' />
                   <label>Password :</label>
                   <input  type='password' />
                   <label>Confirm Password :</label>
                   <input type='password' />
                   <button>SignUp</button>
               </form>
        </>
    )
}

export default Login;