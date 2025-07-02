import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const passcodes = {
   "ab1c2def": "Sri Vageesha Vidhyashram",
"g3h4ijkl": "Sri Vignesh Vidhyalaya",
"m5n6opqr": "Sri Akilandeswari Vidhyalaya",
"st7u8vwx": "RSK Higher Secondary School",
"yz9a0bcd": "Alpha Plus Matriculation Higher Secondary School",
"ef1g2hij": "ST. JOAN OF ARC INTERNATIONAL SCHOOL",
"kl3m4nop": "Brindavan Vidyalaya",
"qr5s6tuv": "Chinmaya Vidhyalaya",
"wx7y8zab": "Sri Vignesh Public School",
"cd9e0fgh": "Santhanam Vidyalaya",
"ij1k2lmn": "Aurobindo International School",
"op3q4rst": "Mahathma Gandhi Centenary Vidhyalaya",
"ab7c8def": "Kamala Niketan Montessari School",
"gh9i0jkl": "Alpha Cambridge International",
"mn1o2pqr": "Alpha Wisdom Vidhyashram",
"st3u4vwx": "Govt Boys School, Srirangam",
"WEAREOSA" : "Old Student Association"
};

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sanitizedPassword = password.trim();
        if (passcodes[sanitizedPassword]) {
            navigate('/school', { state: { school: passcodes[sanitizedPassword] } });
        } else {
            alert('Invalid passcode');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button type="submit">Submit</button>
                <a className="btn btn-success" href="/form">Logout</a>
                <p>If you have forgotten the password, kindly contact the organizer</p>
            </form>
        </div>
    );
};

export default PasswordForm;
