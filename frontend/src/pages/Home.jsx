import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const Home = () => {

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">

      <Navbar />

      <div className="flex flex-col items-center justify-center text-white pt-28">

        <h1 className="text-7xl font-bold mb-6">
          JWT Authentication System
        </h1>

        <p className="text-3xl mb-10">
          Role-Based Access Control with MERN Stack
        </p>

        {/* Features Card */}

        <div className="bg-white text-black w-[900px] rounded-xl p-12 shadow-lg">

          <h2 className="text-4xl font-bold text-center mb-10">
            Features
          </h2>

          <div className="space-y-6 text-2xl">

            <p ><span class="text-green-500 mr-2"> ✓</span>
               Secure JWT token-based authentication
            </p>

            <p><span class="text-green-500 mr-2"> ✓</span>
               Three role levels: User, Manager, and Admin
            </p>

            <p><span class="text-green-500 mr-2"> ✓</span>
               Protected routes with role-based authorization
            </p>

            <p><span class="text-green-500 mr-2"> ✓</span>
               Responsive design with Tailwind CSS
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-6 mt-12">

          <Link to="/login">

            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl text-2xl font-semibold hover:bg-gray-200">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="bg-green-500 text-white px-10 py-4 rounded-xl text-2xl font-semibold hover:bg-green-600">

              Register

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;