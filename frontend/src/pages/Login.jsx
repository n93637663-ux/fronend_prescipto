// src/pages/Login.jsx

import React, { useState } from 'react';
// Assuming you have an authentication context or API call function to handle submission
// import { loginUser, registerUser } from '../api/auth'; 

const Login = () => {
  // Line 5: State to toggle between 'Sign Up' and 'Login' view
  const [state, setState] = useState('Sign Up');
  
  // Line 7-10: States to hold form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  // Line 12: Handles form submission (Login or Sign Up)
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    // Line 15: Placeholder for actual authentication logic
    console.log(`Submitting form as ${state}:`, { name, email, password });
    
    // if (state === 'Sign Up') {
    //   await registerUser({ name, email, password });
    // } else {
    //   await loginUser({ email, password });
    // }
  }

  return (
    // Line 23: Min-height container to center the form vertically
    <div className='min-h-[80vh] flex items-center justify-center p-4'>
      <form onSubmit={onSubmitHandler} 
            className='min-h-[80vh] flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] 
                       sm:min-w-96 border border-zinc-300 rounded-xl text-zinc-600 text-sm shadow-xl'>
        
        {/* Title and Subtitle */}
        <div className='w-full'>
          <p className='text-2xl font-semibold mb-1'>
            {/* Line 20: Dynamic Title */}
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </p>
          <p className='text-sm text-gray-500 mb-4'>
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
          </p>
        </div>

        {/* Full Name Field (Only shown during Sign Up) */}
        {/* Line 23: Conditional Rendering based on state */}
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input 
              className='border border-zinc-300 rounded w-full p-2 mt-1' 
              type="text" 
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={state === 'Sign Up'} // Required only for sign up
            />
          </div>
        )}

        {/* Email Field */}
        <div className='w-full'>
          <p>Email</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="email" 
            placeholder='youremail@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className='w-full'>
          <p>Password</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="password" 
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {/* Submit Button */}
        <button 
          className='bg-primary text-white w-full py-2 rounded-md mt-4 text-base transition-all duration-300' 
          type="submit"
        >
          {state}
        </button>

        {/* Toggle between Login and Sign Up */}
        {/* Line 37: Conditional rendering for the prompt */}
        {state === 'Sign Up' ? (
          <p className='mt-2'>
            Already have an account? 
            <span 
              onClick={() => setState('Login')} 
              className='text-primary ml-1 cursor-pointer font-medium'
            >
              Login here
            </span>
          </p>
        ) : (
          <p className='mt-2'>
            Create a new account? 
            <span 
              onClick={() => setState('Sign Up')} 
              className='text-primary ml-1 cursor-pointer font-medium'
            >
              Sign up here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;