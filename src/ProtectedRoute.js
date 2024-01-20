import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase-config';

const ProtectedRoute = ({children}) => {
    const [isLoading, setLoading] = useState(true)
    const [isAuthenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setAuthenticated(!!user)
            setLoading(false)
        })
        return () => unsubscribe();
    }, []);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute



