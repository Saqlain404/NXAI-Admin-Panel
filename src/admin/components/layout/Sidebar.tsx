import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Paperclip,
  FileText,
  BarChart,
  Settings,
  ChevronDown,
  ChevronUp,
  UserCircle,
  HelpCircle,
  LogOutIcon,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

  // Pages that should keep the dropdown open
  const pagesSubRoutes = [
    "/home",
    "/about",
    "/contact",
    "/win30000",
    "/subscription",
    "/services"
  ];

  useEffect(() => {
    // Check if current path matches any sub-route
    const shouldKeepOpen = pagesSubRoutes.some(route => 
      location.pathname.startsWith(route)
    );
    setShowPagesDropdown(shouldKeepOpen);
  }, [location.pathname]);

  return (
    <div className="w-60 bg-slate-800 shadow-md h-full p-5 space-y-6">
      <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
        NXAI Admin
      </h1>
      <nav className="flex flex-col space-y-4">
      <a
          href="/dashboard"
          className="flex items-center space-x-2 text-white hover:text-blue-600"
        >
          <Home size={18} /> <span>Dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 text-white hover:text-blue-600"
        >
          <Users size={20} /> <span>Users</span>
        </a>

        <div>
          <button
            onClick={() => setShowPagesDropdown(!showPagesDropdown)}
            className="flex items-center justify-between w-full text-white hover:text-blue-600 space-x-3"
          >
            <div className="flex items-center space-x-3">
              <Paperclip size={20} /> 
              <span className={pagesSubRoutes.some(route => 
                location.pathname.startsWith(route)) ? 
                "text-blue-400" : ""
              }>
                Pages
              </span>
            </div>
            {showPagesDropdown ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          
          {showPagesDropdown && (
            <div className="ml-8 mt-2 flex flex-col space-y-2 text-sm text-gray-300">
              <a 
                href="/home" 
                className={`hover:text-blue-400 ${
                  location.pathname === "/home" ? "text-blue-400" : ""
                }`}
              >
                Home
              </a>
              <a 
                href="/about" 
                className={`hover:text-blue-400 ${
                  location.pathname === "/about" ? "text-blue-400" : ""
                }`}
              >
                About Us
              </a>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
              <a href="#" className="hover:text-blue-400">
                Win30000
              </a>
              <a href="/subscription"  className={`hover:text-blue-400 ${
                  location.pathname === "/subscription" ? "text-blue-400" : ""
                }`}>
                Subscription
              </a>
              <a href="/services"  className={`hover:text-blue-400 ${
                  location.pathname === "/services" ? "text-blue-400" : ""
                }`}>
                Services
              </a>
            </div>
          )}
        </div>
        <a
          href="#"
          className="flex items-center space-x-3 text-white hover:text-blue-600"
        >
          <FileText size={20} /> <span>Reports</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-white hover:text-blue-600"
        >
          <BarChart size={20} /> <span>Insights</span>
        </a>

        <p className="text-gray-400 mt-3">OTHERS</p>

        <a
          href="/"
          className="flex items-center space-x-2 text-white hover:text-blue-600"
          aria-current="page"
        >
          <UserCircle size={20} />
          <span>My Profile</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 text-white hover:text-blue-600"
        >
          <Settings size={20} /> <span>Settings</span>
        </a>

        <a
          href="/"
          className="flex items-center space-x-3 text-white hover:text-blue-600"
        >
          <HelpCircle size={20} />

          <span>Help</span>
        </a>

        <a
          href="/login"
          className="flex items-center space-x-2 text-white hover:text-blue-600"
          aria-current="page"
        >
          <LogOutIcon size={20} />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
