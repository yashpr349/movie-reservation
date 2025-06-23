import React, { useState } from 'react';

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log({ username, password });
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      {/* Left Side Image or Visual - Hidden on small screens */}
      <div className="hidden md:block md:w-1/2 h-full bg-black rounded-2xl m-0.5"></div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent w-full max-w-md p-8 rounded-2xl shadow-md"
        >
          <h1 className="text-center text-2xl font-bold mb-6">Welcome Admin</h1>

          <input
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4 border border-black mb-4"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative mb-4">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="w-full h-10 bg-gray-200 rounded-xl px-4 border border-black pr-10"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-sm text-blue-500"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
