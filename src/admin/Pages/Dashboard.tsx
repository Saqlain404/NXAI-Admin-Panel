import { Users, Activity, FileText, Hourglass } from "lucide-react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-screen z-10">
        <Sidebar />
      </div>

      <div className="ml-64 flex-1 flex flex-col bg-slate-900">
        <Header />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          {/* <header className="bg-white shadow p-4 mb-6 rounded-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <img
              src="/assets/images/businesswoman-with-glasses-crossed-arms.jpg"
              alt="Admin"
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>
        </header> */}

          {/* Stat Cards */}

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-600 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Users</p>
                <h3 className="text-2xl font-bold mt-1">1,245</h3>
              </div>
              <Users className="w-8 h-8 opacity-90" />
            </div>

            <div className="bg-green-600 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Active Sessions</p>
                <h3 className="text-2xl font-bold mt-1">532</h3>
              </div>
              <Activity className="w-8 h-8 opacity-90" />
            </div>

            <div className="bg-yellow-500 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Reports Today</p>
                <h3 className="text-2xl font-bold mt-1">36</h3>
              </div>
              <FileText className="w-8 h-8 opacity-90" />
            </div>

            <div className="bg-red-500 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Pending Requests</p>
                <h3 className="text-2xl font-bold mt-1">18</h3>
              </div>
              <Hourglass className="w-8 h-8 opacity-90" />
            </div>
          </section>

          {/* Table Section */}
          <section className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4">Recent Users</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-600 border-b border-gray-200">
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Joined</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Alice Johnson</td>
                  <td className="py-2">alice@example.com</td>
                  <td className="py-2 text-green-600">Active</td>
                  <td className="py-2">April 15, 2025</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Bob Smith</td>
                  <td className="py-2">bob@example.com</td>
                  <td className="py-2 text-yellow-500">Pending</td>
                  <td className="py-2">April 14, 2025</td>
                </tr>
                <tr>
                  <td className="py-2">Charlie Davis</td>
                  <td className="py-2">charlie@example.com</td>
                  <td className="py-2 text-red-500">Inactive</td>
                  <td className="py-2">April 13, 2025</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-white rounded-lg shadow p-6 my-6">
            <h3 className="text-lg font-bold mb-4">Recent AI Agents</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-600 border-b border-gray-200">
                  <th className="py-2">Agent Name</th>
                  <th className="py-2">Purpose</th>
                  <th className="py-2">Created By</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Created On</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">SalesBot Alpha</td>
                  <td className="py-2">Lead Generation</td>
                  <td className="py-2">Amit Verma</td>
                  <td className="py-2 text-green-600">Active</td>
                  <td className="py-2">April 20, 2025</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">SupportGenie</td>
                  <td className="py-2">Customer Support</td>
                  <td className="py-2">Neha Sharma</td>
                  <td className="py-2 text-yellow-500">Training</td>
                  <td className="py-2">April 19, 2025</td>
                </tr>
                <tr>
                  <td className="py-2">CopyMaster</td>
                  <td className="py-2">Content Writing</td>
                  <td className="py-2">Rahul Joshi</td>
                  <td className="py-2 text-red-500">Paused</td>
                  <td className="py-2">April 18, 2025</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
