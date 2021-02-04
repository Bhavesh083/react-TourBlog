import React from 'react';
import './Login.css';

function Login() {
    return(
        <>
               <form className='Signupform'>
                   <h2>Tour Spots</h2>
                   <div className='email'>
                   <input placeholder='Mobile number or email address' type='email' />
                   </div>
                   <div className='pswrd'>
                   <input placeholder='Password' type='password' />
                   </div>
                   <div className='cpswrd'>
                   <input placeholder='Confirm Password' type='password' />
                   </div>
                   <button>SignUp</button>
               </form>
        </>
    )
}

export default Login;