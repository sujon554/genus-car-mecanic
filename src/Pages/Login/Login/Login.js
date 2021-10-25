import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
 
    return (
        <div>
            <h2>Log in Please</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Please Login</button>
        </div>
    );
};

export default Login;