import Navbar from "../components/Navbar";

const ManagerDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <Navbar />

      {/* Main Container */}

      <div className="max-w-6xl mx-auto py-8 px-4">

        {/* Header */}

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg p-8 mb-6">

          <h1 className="text-5xl font-bold">

            Manager Dashboard

          </h1>

          <p className="mt-2 text-lg">

            Welcome, {user?.name}! Manage your team efficiently.

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-6">

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">

            <p className="text-gray-500">

              Team Members

            </p>

            <h2 className="text-5xl font-bold mt-2">

              10

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">

            <p className="text-gray-500">

              Active Projects

            </p>

            <h2 className="text-5xl font-bold mt-2">

              8

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-500">

            <p className="text-gray-500">

              Pending Approvals

            </p>

            <h2 className="text-5xl font-bold mt-2">

              4

            </h2>

          </div>

        </div>

        {/* Middle Section */}

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Recent Activities */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold mb-6">

              Recent Activities

            </h2>

            <div className="space-y-5">

              <div className="border-b pb-3">

                <p className="font-semibold">

                  Approved project proposal from Team A

                </p>

              </div>

              <div className="border-b pb-3">

                <p className="font-semibold">

                  Reviewed performance reports

                </p>

              </div>

              <div className="border-b pb-3">

                <p className="font-semibold">

                  Scheduled team meeting for next week

                </p>

              </div>

              <div>

                <p className="font-semibold">

                  Assigned new tasks to team members

                </p>

              </div>

            </div>

          </div>

          {/* Manager Information */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold mb-6">

              Manager Information

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

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">

                  {user?.role}

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Access Box */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">

          <p className="text-blue-700">

            Manager Access Level: You can manage team members, approve requests, and oversee projects.

          </p>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">

            View User Dashboard

          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">

            Go to Admin Dashboard

          </button>

        </div>

      </div>

    </div>
  );
};

export default ManagerDashboard;