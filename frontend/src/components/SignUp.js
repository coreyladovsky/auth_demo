import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const API = apiURL();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // await axios.post(`${API}/api/users`, { id: res.user.uid, email });      
            history.push("/")
        } catch (err) {
            
        }

    }
    
    return(
        <div>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setEmail(e.target.value)} placeholder="Email" value={email}/>
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" value={password}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

