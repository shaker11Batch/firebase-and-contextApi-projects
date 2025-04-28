import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {

    const {createUser} = use(AuthContext)
    // console.log(createUser)

    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate('/')
        }).catch( error => console.log(error.massege))
    }

    return (

        <div className="hero bg-base-200 min-h-screen">

            <div className="text-center lg:text-left mb-5">
                <h1 className="text-5xl font-bold">Login now!</h1>


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <p>Already have an account? Please <Link className='underline text-blue-500' to='/login'>Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;