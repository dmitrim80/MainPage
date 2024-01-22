import {useState, useEffect} from 'react'
import { signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from './firebase-config'
import { useNavigate } from 'react-router-dom';


const Header = ({ darkMode, toggleDarkMode }) => {

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#374151' : '#F5F5F5';
        document.body.style.color = darkMode ? '#F5F5F5' : '#374151';
      }, [darkMode]);

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
            setUser(userCredential.user); // Set the user
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
            setUser(null); // Reset the user to null on logout
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

  return (
    <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
           {error && <div className="error-message">{error}</div>}
           {user ? (
            <>
            <span>Welcome, {user.email}</span> {/* Displaying the user's email */}
            <button className='header-buttons' onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
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
            </>
            )}

            <div><i class="fas fa-sun"></i></div>
            <div className={darkMode ? "toggler--slider-black" : "toggler--slider-white"} onClick={toggleDarkMode}>
                <div className={darkMode ? "toggler--slider--circle-white" : "toggler--slider--circle-black"}></div>
            </div>
            <div><i class="fas fa-moon"></i></div>
            
    </div>
  )
}

export default Header