import React from "react"
import "/src/scss/Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignUp = () => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main>
            <div className="login-section row">
                <h2 className="login-text">SignUp</h2>
                <div className="login-details">
                    <form action="#">
                    <input type="text" name="" id="" placeholder="Enter your Username" required 
                            value={username} onChange={e => setUserName(e.target.value)}
                        />
                        <input type="email" name="" id="" placeholder="Enter your Email" required 
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <input type="text" name="" id="" placeholder="Enter your Password" required
                        value={password} onChange={e => setPassword(e.target.value)}
                        />

                        <button type="submit">Create an Account</button>
                    </form>
                    <span><p>Already Have an account?</p> <Link to="/login">Login</Link></span>
                </div>
            </div>
        </main>
    )
}

export default SignUp