import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'


const MemberLogin = () => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/members/member-login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        if (!response.ok) {
            throw new Error('Failed to login. Please check your email and password and try again.');
        }

        const result = await response.json();
        console.log('Login success:', result);
        alert('Login success');

        // You might want to do something with the result here,
        // like storing the user info in state or navigating to another route
        // For example, navigate to the dashboard
        navigate('/admin-panel');

    } catch (error) {
        console.error('Login error:', error.message);
        // Handle errors, e.g., show an error message to the user
    }
};



  
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          {/* <p className="mt-2 text-sm text-gray-600">
            Or <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
          </p> */}
        </div>
        <form
          className="mt-8 space-y-7"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="flex align-items-center border border-gray-300 rounded-md">
                <FiMail className="m-3" />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="flex align-items-center border border-gray-300 rounded-md">
                <FiLock className="m-3" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberLogin;
