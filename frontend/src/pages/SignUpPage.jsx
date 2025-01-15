import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Function to handle the API call for registration
const registerUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Registration successful:', data);
      return { success: true, message: 'Registration successful!' };
    } else {
      console.error('Registration failed:', data.message);
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Network error. Please try again later.' };
  }
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { success, message } = await registerUser(formData);

    setLoading(false);
    if (success) {
      // Redirect to SignIn page after successful sign-up
      alert("Signed Up!");
      navigate("/dashboard");
    } else {
      setError(message); // Show error message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition ease-in-out duration-300"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
