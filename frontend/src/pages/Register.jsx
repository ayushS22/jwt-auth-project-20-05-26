import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {

      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      alert("Registration Successful");

    } catch (error) {

      alert(error.response?.data?.message);
    }
  };

  return (

    <div className="h-screen overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center px-4">

      <div className="bg-white w-full max-w-[480px] max-h-[690px] rounded-2xl shadow-xl p-8">

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">

          Register

        </h1>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          {/* Full Name */}

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-1">

              Full Name

            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl p-2 text-lg outline-none focus:border-green-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

          </div>

          {/* Email */}

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-2">

              Email Address

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl p-2 text-lg outline-none focus:border-green-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

          </div>

          {/* Password */}

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-2">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl p-2 text-lg outline-none focus:border-green-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-2">

              Confirm Password

            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-xl p-2 text-lg outline-none focus:border-green-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
            />

          </div>

          {/* Role */}

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-2">

              Role

            </label>

            <select
              className="w-full border border-gray-300 rounded-xl p-2 text-lg outline-none focus:border-green-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
            >

              <option value="user">User</option>

              <option value="manager">Manager</option>

              <option value="admin">Admin</option>

            </select>

          </div>

          {/* Register Button */}

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl text-xl font-semibold transition duration-300">

            Register

          </button>

        </form>

        {/* Footer */}

        <p className="text-center text-lg text-gray-700 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login here
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;