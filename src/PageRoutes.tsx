import { lazy } from "react";

import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./admin/Pages/Dashboard"));
const Home = lazy(() => import("./admin/Pages/Home"));
const About = lazy(() => import("./admin/Pages/About"));
const Login = lazy(() => import("./admin/Pages/Login"));
const ForgotPassword = lazy(() => import("./admin/Pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./admin/Pages/ResetPassword"));
const Subscription = lazy(() => import("./admin/Pages/Subscription"));
const Services = lazy(() => import("./admin/Pages/Services"));

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/services" element={<Services />} />
      
    </Routes>
  );
};

export default PageRoutes;
