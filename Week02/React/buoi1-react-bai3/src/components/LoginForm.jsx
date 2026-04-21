import React from 'react';
import './LoginForm.css';

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      
      <form className="login-form">
        <h2>Đăng nhập</h2>
        
        {/* Username */}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Nhập tên đăng nhập" />
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Nhập mật khẩu" />
        </div>

        {/*Login */}
        <button type="button" className="btn-login">Login</button>
      </form>

    </div>
  );
}