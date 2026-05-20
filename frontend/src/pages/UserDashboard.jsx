import Navbar from "../components/Navbar";

const UserDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <div className="max-w-5xl mx-auto py-8 px-4">

        {/* Header */}

        <div className="bg-white rounded-xl shadow p-6 mb-6">

          <h1 className="text-4xl font-bold text-gray-900">

            User Dashboard

          </h1>

          <p className="text-gray-600 mt-2">

            Welcome, {user?.name}

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <div className="bg-blue-500 text-white rounded-xl p-6 shadow">

            <p className="text-lg">My Tasks</p>

            <h2 className="text-5xl font-bold mt-2">

              5

            </h2>

          </div>

          <div className="bg-green-500 text-white rounded-xl p-6 shadow">

            <p className="text-lg">Notifications</p>

            <h2 className="text-5xl font-bold mt-2">

              3

            </h2>

          </div>

        </div>

        {/* User Info */}

        <div className="bg-white rounded-xl shadow p-6 mb-6">

          <h2 className="text-3xl font-bold mb-6">

            Your Information

          </h2>

          <div className="space-y-4 text-lg">

            <div className="border-b pb-3">

              <span className="font-semibold">

                Name:

              </span>{" "}

              {user?.name}

            </div>

            <div className="border-b pb-3">

              <span className="font-semibold">

                Email:

              </span>{" "}

              {user?.email}

            </div>

            <div className="border-b pb-3">

              <span className="font-semibold">

                Role:

              </span>{" "}

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                {user?.role}

              </span>

            </div>

          </div>

        </div>

        {/* Access Box */}

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">

          <p className="text-yellow-700">

            User Access Level: You have basic access to view your profile and tasks.

          </p>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">

            Go to Manager Dashboard

          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">

            Go to Admin Dashboard

          </button>

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;