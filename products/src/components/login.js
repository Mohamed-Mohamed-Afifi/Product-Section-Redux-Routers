import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../Redux/loginSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const user = useRef();
    const pass = useRef();
    const navTo = useNavigate();
    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();
        if (!user.current.value || !pass.current.value) return;
        dispatch(setInfo({ username: user.current.value, password: pass.current.value }))
        navTo('/dashboard')
    }
    return (
        <div>
            <form method='POST' onSubmit={(e) => handelSubmit(e)}>
                <label>Email</label>
                <input type="text" name="username" id="user" ref={user} />
                <label>Password</label>
                <input type="password" name="password" id="pass" ref={pass} />
                <button onClick={() => navTo('/products/1')}>click</button>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

export default Login