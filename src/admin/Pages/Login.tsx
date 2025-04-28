import React, { useState } from 'react';
import { motion } from "framer-motion";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen h-full bg-slate-900 flex items-center justify-center">
     
        <div className="w-1/3 bg-gray-100 items-center shadow-lg rounded-2xl p-8">
        <img src="/assets/images/nav-logo.svg" alt="" className='w-40  mx-auto items-center' />
          <h2 className="text-2xl font-semibold text-center mb-6 mt-[-20px] text-slate-700">Welcome to Admin Panel</h2>
          <div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-md py-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full border border-gray-300 rounded-md p-2'
                />
              </div>
              <div>
                <label className="block text-md py-2 font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='w-full border border-gray-300 rounded-md p-2'
                />
              </div>
              <div className="flex items-center justify-between text-sm">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox rounded text-blue-600"
      />
      <span className="text-gray-700">Remember me</span>
    </label>
    <a href="/forgot-password" className="text-blue-600 hover:underline">
      Forgot password?
    </a>
  </div>
              <button className="w-full bg-gradient-to-r text-bold text-white from-blue-400 to-blue-600 rounded-lg p-2" type="submit">
                <a href="/dashboard">
                Login
                </a>
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default AdminLogin;
