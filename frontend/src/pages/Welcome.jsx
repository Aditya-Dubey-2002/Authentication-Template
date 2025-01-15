import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <h1 className="text-4xl text-white font-bold mb-6">Welcome to Auth App</h1>
      <p className="text-lg text-white mb-8">Please choose an option below</p>
      <div className="flex space-x-4">
        <Link to="/signin">
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition ease-in-out duration-300">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition ease-in-out duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
