import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle password reset logic here
    console.log('Password reset successfully:', newPassword);
  };

  return (
    <div className="min-h-screen h-full bg-slate-900 flex items-center justify-center">
      <div className="w-1/3 bg-gray-100 shadow-lg rounded-2xl p-8">
        <img src="/assets/images/nav-logo.svg" alt="" className="w-40 mx-auto" />
        <h2 className="text-2xl font-semibold text-center mb-6 mt-[-20px] text-slate-700">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-md py-2 font-medium text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-md py-2 font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r text-bold text-white from-blue-400 to-blue-600 rounded-lg p-2"
          >
            Reset Password
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          <a href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
