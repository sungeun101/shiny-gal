import React, { useState } from 'react';
import { authService } from 'firebase/config'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newAccount, setNewAccount] = useState(true)

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = e => {
        const { target: { name, value } } = e
        name === 'email' && setEmail(value)
        name === 'password' && setPassword(value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type='email' placeholder='Email' name='email' value={email} required />
                <input onChange={onChange} type='password' placeholder='Password' name='password' value={password} required />
                <input type='submit' value={newAccount ? 'Log In' : 'Register'} />
            </form>
            <div>
                <button> Continue with Google</button>
            </div>
        </div>
    );
};

export default Auth;