import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Eye icons for password toggle

function Auth() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    fetch('http://localhost:4040/admin/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((res)=> data)
    .then((data)=> console.log(data))
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2 h-[99%] rounded-2xl m-2 bg-cover bg-center shadow-xl" 
           style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/14898990/file/original-ba68e98ea10e1867e831884c3b153387.png?resize=1600x1200&vertical=center')" }}>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/80 border border-gray-300 rounded-2xl shadow-lg p-8 w-full max-w-md transition-all"
        >
          <h1 className="text-[#7D4BFF] text-3xl font-bold mb-6 font-mono">Admin Panel</h1>

          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="text"
            className="w-full h-10 px-4 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-[#7D4BFF] transition mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="w-full h-10 px-4 pr-10 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-[#7D4BFF] transition"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-10 bg-[#7D4BFF] text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
