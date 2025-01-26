import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook to navigate to different pages

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle login or logout action
  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Logout
      setIsAuthenticated(false);
      // Redirect to login page or handle logout
      navigate("/auth/login");
    } else {
      // Login (for now, just set as authenticated)
      setIsAuthenticated(true);
      // Redirect to dashboard or another page
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="w-11/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-200">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
            <span className="ml-3 text-xl">SMIT</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          {/* User Icon */}
          <div className="relative">
            <FaUserCircle
              className="h-10 w-10 cursor-pointer"
              onClick={toggleModal}
            />
            {/* Modal below the icon */}
            {isModalOpen && (
              <div className="absolute right-0 mt-2 w-50 h-30 bg-white shadow-lg rounded-lg p-4 text-center">
                {isAuthenticated ? (
                  <>
                    <Link to={"/profile"}>
                      <p>My Profile</p>
                    </Link>
                    <button onClick={handleAuthAction} className="text-red-500">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to={"/auth/login"}>
                    <p>Login</p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
