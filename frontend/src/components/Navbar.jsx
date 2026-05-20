import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="bg-blue-700 text-white px-10 py-5 flex justify-between items-center">

      <h1 className="text-4xl font-bold">
        JWT Auth
      </h1>

      <div className="flex gap-6">

        <Link to="/login">

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-xl">

            Login

          </button>

        </Link>

        <Link to="/register">

          <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl">

            Register

          </button>

        </Link>

      </div>

    </nav>
  );
};

export default Navbar;