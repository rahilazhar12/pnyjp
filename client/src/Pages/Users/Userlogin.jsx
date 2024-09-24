import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa'; // Importing user icon from react-icons
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assuming you have state variables for email and password
        const userData = {
          email,
          password
        };
      
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/user-login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          
          const data = await response.json();
          if (response.ok) {
            alert(data.Message);
            sessionStorage.setItem('user' , JSON.stringify(data))
            navigate('/users')
            window.location.reload()
            // Optionally reset form or redirect user
          } else {
            // Handle errors, e.g., display an error message
            alert(data.error || 'An error occurred');
          }
      
          
        } catch (error) {
           
          console.error('Login error:', error);
          // Handle error, show user feedback, etc.
        }
      };
      
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">User Login</h1>
        <div className="flex items-center justify-center mb-4">
          <FaUserAlt className="text-teal-500 text-3xl" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
