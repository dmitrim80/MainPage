import React,{useState} from 'react'
import { signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from './firebase-config'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user,setUser] = useState(null)
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const [error, setError] = useState("");

    const login = async () => {
        try {
            setIsLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate('/Homepage');
        }
        catch (error) {
            alert("Failed to login. Please check your credentials.");
        } finally {
            setIsLoading(false);
            setLoginEmail('');
            setLoginPassword('');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    
  return (
    <div className='header'>
           {error && <div className="error-message">{error}</div>}
            <input 
            className='header-email-input'
            id="emailInput"
            type="email"
            placeholder="Email..." 
            autoComplete= 'off'
            value={loginEmail}
            onChange={(event)=>{
                setLoginEmail(event.target.value)
                }}
            />
            <input 
            className='header-password-input'
            placeholder="Password..." 
            type='password'
            autoComplete= 'off'
            value={loginPassword}
            id="passwordInput"         // Unique ID for the element
            name="password"            // Name for form submission
            onChange={(event)=>{
                setLoginPassword(event.target.value)
                }}
            />
            <button className='header-buttons' onClick={login} disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button> 
            <button className='header-buttons' onClick={handleLogout}>Logout</button>
        
    </div>
  )
}

export default Header