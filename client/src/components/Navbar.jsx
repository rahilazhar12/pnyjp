import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Declaring Nav items / dynamic / custom path
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    // <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 shadow-lg shadow-blue/40">
    <header className="max-w-screen-2xl bg-gradient-to-r from-sky-500 to-cyan-100 container mx-auto xl:px-24 px-4 drop-shadow-lg">
      
      <nav className="flex justify-between items-center py-3">
        <Link href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src="./images/logo3.png" className="w-16" />
          <span className="font-bold">
            Job Portal
                {/* <span className="text-blue">Job</span> <span className="text-red-700">Portal</span> */}
            </span>
        </Link>
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="tefxt-base text-primary">
                <NavLink to={path}
                    className={({isActive})=> isActive ? "active" : ""} >                    
                {title}
                </NavLink>
            </li>
          ))}

        </ul>

        {/* signup and login buttons */}
        <div className="text-base text-primary font-medium space-x-3 hidden lg:block">
            {/* <Link to="/login" className="py-2 px-5 border rounded shadow-lg shadow-red-500/50 bg-white">Log in</Link> */}
            <Link to="/login" className="py-2 loginbtn px-5 border rounded">Log in</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue-500 text-white">Sign up</Link>
        </div>
        
        {/* mobile menu screen size adjustment */}
        <div className="md:hidden block ">
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />
                }
            </button>
        </div>

      </nav>

        {/* navItems for Mobile Devices */}
        <div className={`px-4 bg-black navbarSpecial py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
                {navItems.map(({ path, title }) => (
                    <li key={path} className="text-base text-white first:text-white py-1">
                        <NavLink to={path}
                            className={({isActive})=> isActive ? "active" : ""} >                    
                        {title}
                        </NavLink>
                    </li>
                ))}
                
                <li className="text-white py-1">
                  <Link to="/login">Log in</Link>
                </li>

            </ul>
        </div>
    </header>
  );
};

export default Navbar;
