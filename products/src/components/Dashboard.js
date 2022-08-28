import React from 'react'
import { useSelector } from 'react-redux'
function Dashboard() {
    const user = useSelector(state => state.log.data)
    console.log(user)
    return (
        <div className='container'>
            <h1>Dashboard</h1>
            <h2>{user.username ? `Hello , ${user.username}` : ''}</h2>
        </div>
    )
}

export default Dashboard