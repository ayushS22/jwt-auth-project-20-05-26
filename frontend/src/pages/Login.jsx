import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        formData
      );

      console.log(res.data);

      // Save token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      // Role-based redirect
      const role =
        res.data.user.role.toLowerCase();

      if(role === "admin"){

        navigate("/admin");

      } else if(role === "manager"){

        navigate("/manager");

      } else {

        navigate("/user");
      }

    } catch(error){

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center overflow-hidden px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">

          Login

        </h1>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}

          <div>

            <label className="block text-lg font-semibold mb-2 text-gray-800">

              Email Address

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl text-lg outline-none focus:border-blue-500"
            />

          </div>

          {/* Password */}

          <div>

            <label className="block text-lg font-semibold mb-2 text-gray-800">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl text-lg outline-none focus:border-blue-500"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-xl font-semibold transition duration-300"
          >

            Login

          </button>

        </form>

        {/* Footer */}

        <p className="text-center text-lg text-gray-700 mt-8">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >

            Register here

          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;