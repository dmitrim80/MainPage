import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, currentUser }) => {
    if (!currentUser) {
        return <Navigate to="/Login" />;
    }
    return children;
}

export default ProtectedRoute;
