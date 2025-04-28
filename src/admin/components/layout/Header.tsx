import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  // Mapping routes to their headings
  const headings: { [key: string]: string } = {
    "/": "Dashboard",
    "/home": "Home",
    "/about": "About",
    "/services": "Services",
    "/subscription": "Subscription",
    "/reports": "Reports",
    "/insights": "Insights",
    "/settings": "Settings",
  };

  const heading = headings[location.pathname] || "Dashboard";

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="flex items-center space-x-4">
        <span className="text-red-600 hover:bg-red-400 hover:text-white px-2 rounded">
          <a href="/login">Logout</a>
        </span>

        <span className="text-gray-600">Admin</span>
        <img
          src="/assets/images/businesswoman-with-glasses-crossed-arms.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
