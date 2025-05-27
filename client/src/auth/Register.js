import { useState } from 'react';
import { Link } from 'react-router';
import './auth.css'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/auth/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        });
        const data = await res.json();
        setMessage(data.message);
    };

    return(
        <div className='main-container'>
            <div className='login-container'>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className='login-register'>
                        <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} required/>
                        <button className="login-button"type="submit">Register</button>
                    </div> 
                </form>
                <Link to="/login">
                    <button className="login-register-link">
                        Have an account? Sign in
                    </button>
                </Link>
                {message && <p>{message}</p>}
            </div>
        </div>
        
    )
}