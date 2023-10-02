import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Admin Dashboard/Pages/dashboard";
import Profile from "../Admin Dashboard/Pages/profile";
import Setting from "../Admin Dashboard/Pages/setting";
import SignIn from "../SignIn_SignUp/signIn";
import SignUp from "../SignIn_SignUp/signUp";
import HomePage from "../Home/layout";

export default function Routers() {
  const isUserSignIn = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      {isUserSignIn && <Route path="/home" element={<HomePage />} />}
    </Routes>
  );
}
