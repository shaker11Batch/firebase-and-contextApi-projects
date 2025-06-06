import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext)
    if (loading) {
        return <p>amr sonir banglaJ</p>
        
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;