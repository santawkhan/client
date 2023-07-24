/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { FaGoogle } from "react-icons/fa";

import { AuthContext } from '../provider/AuthProvider';
import app from '../firebase/firebase.config';


const Login = () => {

    useEffect(() => {
        document.title = 'Doll House | Login'
    }, []);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        navigate(from, { replace: true })

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl text-center font-serif font-bold">Welcome Back!</h1>
                        <p className="py-6 w-3/4 "><img src="f" className='rounded-xl' alt="" /></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 className='text-center font-serif font-bold text-2xl'>Login</h3>
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>

                            <p className='font-semibold'>Dont have an account please <Link to={'/signUp'}> <span className='text-blue-800'>SignUp</span> </Link ></p>
                            <h3 className='text-center font-bold text-xl'>Or</h3>
                        </div>
                        <button onClick={handleGoogleSignIn} className='font-bold grid grid-cols-2 text-center gap-2 mb-6 btn btn-secondary w-96'><div>SignIn With</div> <div><FaGoogle /></div></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;