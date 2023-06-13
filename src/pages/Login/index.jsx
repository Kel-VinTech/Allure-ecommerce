import React from "react"
import "/src/scss/Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main>
            <div className="login-section row">
                <h2 className="login-text">Login</h2>
                <div className="login-details">
                    <form action="#">
                        <input type="email" name="" id="" placeholder="Enter your email" required 
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <input type="text" name="" id="" placeholder="Enter your Password" required
                        value={password} onChange={e => setPassword(e.target.value)}
                        />

                        <button type="submit">Login</button>
                    </form>
                    <span><p>Don't have an account?</p> <Link to="/signup">Create an account</Link></span>
                </div>
            </div>
        </main>
    )
}

export default Login