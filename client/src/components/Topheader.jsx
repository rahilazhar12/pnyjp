import React, { useState, useEffect } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';



const Topheader = () => {
  const user = sessionStorage.getItem('user')
  const navigate = useNavigate()


  const Logouthandler = () => {
    sessionStorage.clear('user')
    navigate('/login')
    window.location.reload()
  }

  return (
    <div>
      <header className="max-w-screen-2xl container bg-slate-700 mx-auto xl:px-24 px-4">
        <nav className="flex justify-end items-center py-1">
          {/* nav items for large devices */}
          <ul className="hidden md:flex gap-6">
            {user && (
              <>
                <Link to="/Resume">
                  <li className="text-sm text-white">
                    <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                      <ImProfile />
                      PROFILE
                    </span>
                  </li>
                </Link>

                <Link to="/new_profile_builder">
                  <li className="text-sm text-white">
                    <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                      <ImProfile />
                      PROFILE BUILDER
                    </span>
                  </li>
                </Link>
              </>
            )}
            <Link to="/register-company">
              <li className="text-sm text-white">
                <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                  <FiLogOut />
                  REGISTER
                </span>
              </li>
            </Link>
            <li className="text-sm text-white">
              <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                <FiLogIn />
                LOGIN
              </span>
            </li>
            <Link to="/member-login">
              <li className="text-sm text-white">
                <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                  <FiLogIn />
                  MEMBER LOGIN
                </span>
              </li>
            </Link>
           
              <button onClick={Logouthandler}  className="text-sm text-white">
                <span className="text-sm flex gap-2 items-center hover:text-yellow-300">
                  <FiLogIn />
                  Logout
                </span>
              </button>
            
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Topheader;
