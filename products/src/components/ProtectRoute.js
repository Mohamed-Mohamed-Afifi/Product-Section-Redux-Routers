import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
    const { username, password } = useSelector(state => state.log.data)

    if (username === "mohamedfifi050@gmail.com" && password === "admin") {
        return children
    } else {

        return <Navigate to='/' />
    }
}

export default ProtectRoute