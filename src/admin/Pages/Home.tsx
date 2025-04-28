import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  // Static Data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joined: "2025-04-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joined: "2025-04-11",
    },
    {
      id: 3,
      name: "Mike Ross",
      email: "mike@example.com",
      joined: "2025-04-12",
    },
  ];

  const orders = [
    { id: 101, product: "Laptop", amount: "$999", date: "2025-04-15" },
    { id: 102, product: "Phone", amount: "$499", date: "2025-04-14" },
    { id: 103, product: "Tablet", amount: "$299", date: "2025-04-13" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-screen z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col bg-slate-900">
        <Header />

        <div className="p-6 overflow-y-auto flex flex-col space-y-6 my-12">

          {/* Recent Users Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Recent Users</h2>
            <table className="w-full table-auto text-left text-sm">
              <thead>
                <tr className="text-gray-900 border-b border-gray-700">
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-700 border-b border-gray-200"
                  >
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Recent Orders</h2>
            <table className="w-full table-auto text-left text-sm">
              <thead>
                <tr className="text-gray-900 border-b border-gray-700">
                  <th className="py-2">Product</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-700 border-b border-gray-200"
                  >
                    <td className="py-2 ">{order.product}</td>
                    <td className="py-2">{order.amount}</td>
                    <td className="py-2">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
