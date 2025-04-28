import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
      
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
         
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>New to this site? Please <Link className='underline text-blue-500' to='/signUp'>Register</Link></p>
            </div>
            </div>
           
        </div>
        </div>
 
    );
};

export default Login;