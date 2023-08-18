
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [signupError, setSignupError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async () => {
        setEmailError('');
        setSignupError('');

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                alert('Signup success.');
            } else {
                alert('Error.');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setSignupError('Email is already registered.');
            } else {
                console.log(error);
                alert('Error.');
            }
        }
    };

    return (
        <>
            <h1 className="signup-heading">SIGNUP</h1>
            <div className="signup-card">
                Email
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="signup-input"
                    type="email"
                />
                {emailError && <p className="error-message">{emailError}</p>}
                {signupError && <p className="error-message">{signupError}</p>}
                <br /><br />
                Password
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="signup-input"
                    type="password"
                />
                <br /><br />
                <button
                    onClick={handleSubmit}
                    className="signup-btn"
                >
                    SUBMIT
                </button>
                <Link
                    style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}
                    to={'/signin'}
                    className="signin-link"
                >
                    SIGN IN
                </Link>
            </div>
        </>
    );
}

export default Signup;


