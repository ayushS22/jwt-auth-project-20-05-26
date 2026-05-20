import Navbar from "../components/Navbar";

const AdminDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <Navbar />

      {/* Main Container */}

      <div className="max-w-6xl mx-auto py-8 px-4">

        {/* Header */}

        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg p-8 mb-6">

          <h1 className="text-5xl font-bold">

            Admin Dashboard

          </h1>

          <p className="mt-2 text-lg">

            Welcome, {user?.name}! You have full system control.

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-6">

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">

            <p className="text-gray-500">

              Total Users

            </p>

            <h2 className="text-5xl font-bold mt-2">

              100

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500">

            <p className="text-gray-500">

              Total Managers

            </p>

            <h2 className="text-5xl font-bold mt-2">

              15

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-red-500">

            <p className="text-gray-500">

              Total Admins

            </p>

            <h2 className="text-5xl font-bold mt-2">

              3

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">

            <p className="text-gray-500">

              System Health

            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-600">

              Good

            </h2>

          </div>

        </div>

        {/* Middle Section */}

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Admin Actions */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold mb-6">

              Admin Actions

            </h2>

            <div className="space-y-4">

              <div className="bg-blue-50 p-4 rounded-lg">

                <h3 className="font-bold text-blue-700">

                  Manage Users

                </h3>

                <p className="text-gray-600">

                  Add, edit, or remove users

                </p>

              </div>

              <div className="bg-purple-50 p-4 rounded-lg">

                <h3 className="font-bold text-purple-700">

                  System Settings

                </h3>

                <p className="text-gray-600">

                  Configure system preferences

                </p>

              </div>

              <div className="bg-green-50 p-4 rounded-lg">

                <h3 className="font-bold text-green-700">

                  View Logs

                </h3>

                <p className="text-gray-600">

                  Access system audit logs

                </p>

              </div>

              <div className="bg-red-50 p-4 rounded-lg">

                <h3 className="font-bold text-red-700">

                  Security Settings

                </h3>

                <p className="text-gray-600">

                  Manage security configurations

                </p>

              </div>

            </div>

          </div>

          {/* Recent Activities */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold mb-6">

              Recent Admin Activities

            </h2>

            <div className="space-y-5">

              <div className="border-b pb-3">

                <p className="font-semibold">

                  User account created

                </p>

                <span className="text-gray-500 text-sm">

                  2 hours ago

                </span>

              </div>

              <div className="border-b pb-3">

                <p className="font-semibold">

                  System backup completed

                </p>

                <span className="text-gray-500 text-sm">

                  5 hours ago

                </span>

              </div>

              <div className="border-b pb-3">

                <p className="font-semibold">

                  Security patch applied

                </p>

                <span className="text-gray-500 text-sm">

                  1 day ago

                </span>

              </div>

              <div>

                <p className="font-semibold">

                  Database optimized

                </p>

                <span className="text-gray-500 text-sm">

                  2 days ago

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Admin Information */}

        <div className="bg-white rounded-xl shadow p-6 mb-6">

          <h2 className="text-3xl font-bold mb-6">

            Admin Information

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

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">

                {user?.role}

              </span>

            </div>

          </div>

        </div>

        {/* Warning Box */}

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">

          <p className="text-red-700">

            Admin Access Level: You have complete access to all system features, user management, and configurations.

          </p>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">

            View User Dashboard

          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">

            View Manager Dashboard

          </button>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;