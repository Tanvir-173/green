import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Register = () => {


    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword  (auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
            });

    }
    return (


        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Register;