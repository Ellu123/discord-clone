import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        //Where you log in with an google account
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className = "login">
            <div className="login__logo">
                <img src={require("../Discord_logo.png")} alt="Discord logo"/>
            </div>

            <Button onClick ={signIn}>Sign in</Button>

        </div>
    )
}

export default Login
