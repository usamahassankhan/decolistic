import React from 'react';

import './index.css';
const AdminLogin = () => {
    return (
        <div className='loginpage'>
            <h1>LOGIN PAGE</h1>
            <div className='login1row'>
                <label>USER NAME</label>
                <input type='text' />
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='password' />
            </div>
            <button className='adminloginbtn'>Submit</button>
        </div>
    );
};

export default AdminLogin;
