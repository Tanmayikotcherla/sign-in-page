import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import './signin.css';

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(email, password);
        axios.post('http://localhost:5000/signin', {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data);

            if (res.data.code === 500) {
                alert('User Not Found');
            }
            if (res.data.code === 404) {
                alert('Password is wrong');
            }
            if (res.data.code === 200) {
                // move to home
                navigate('/');
                localStorage.setItem('TOKEN', res.data.token);
                localStorage.setItem('EMAIL', res.data.email);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <h1 className="signin-heading"> SIGN IN </h1>
            <div className="signin-card">
                Email
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    className="signin-input"
                    type="email" /> <br /> <br />
                Password
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    className="signin-input"
                    type="password" /> <br /> <br />
                <button
                    onClick={handleSubmit}
                    className="signin-btn"> SIGN IN </button>
                <Link className="signup-link" to={'/signup'}> SIGN UP </Link>
                <Link className="forget-pass-link" to={'/forget-pass'}> Forget Password </Link>
            </div>
        </>
    );
}

export default Signin;
