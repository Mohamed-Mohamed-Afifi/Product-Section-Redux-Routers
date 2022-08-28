import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Home() {
    return (
        <div>
            <nav className='container bg-dark '>
                <NavLink to='/' className='px-2 Navlink'>Home</NavLink>
                <NavLink to='products' className='px-2'>Products</NavLink>
                <NavLink to='login' className='px-2'>Login</NavLink>
            </nav>
            <section className='products'>
                <Outlet />
            </section>
        </div>
    )
}

export default Home