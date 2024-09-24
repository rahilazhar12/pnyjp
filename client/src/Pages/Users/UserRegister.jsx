import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCity, FaUserTie } from 'react-icons/fa';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [isPNYAlumni, setIsPNYAlumni] = useState(false);
  const [batchNo, setBatchNo] = useState('');
  const [courseName, setCourseName] = useState('');

  const RegisterUser = async (e) => {
    e.preventDefault();
  
    const userDetails = {
      name,
      email,
      password,
      contact,
      city,
      isPNYAlumni,
      ...(isPNYAlumni && { batchNo, courseName }) // Include batchNo and courseName only if isPNYAlumni is true
    };
  
    let response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/register-user`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[500px]">
        <h1 className="text-2xl mb-4 font-bold text-center">Register</h1>
        <form onSubmit={RegisterUser}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <FaUser className="inline"/></label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <FaEnvelope className="inline"/></label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <FaLock className="inline"/></label>
            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact <FaPhone className="inline"/></label>
            <input type="text" id="contact" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City <FaCity className="inline"/></label>
            <input type="text" id="city" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="isPNYAlumni" className="block text-sm font-medium text-gray-700">Are you a PNY Alumni?</label>
            <select id="isPNYAlumni" value={isPNYAlumni} onChange={(e) => setIsPNYAlumni(e.target.value === 'true')} className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500">
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          {isPNYAlumni && (
            <>
              <div className="mb-4">
                <label htmlFor="batchNo" className="block text-sm font-medium text-gray-700">Batch No</label>
                <input type="text" id="batchNo" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={batchNo} onChange={(e) => setBatchNo(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                <input type="text" id="courseName" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
              </div>
            </>
          )}
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">Register</button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
