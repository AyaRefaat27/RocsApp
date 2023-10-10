import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Admin Dashboard/Pages/dashboard";
import Profile from "../Admin Dashboard/Pages/profile";
import MainPage from "../Admin Dashboard/Chat/mainPage";
import Setting from "../Admin Dashboard/Pages/setting";
import SignIn from "../SignIn_SignUp/signIn";
import SignUp from "../SignIn_SignUp/signUp";

export default function Routers() {
  // const isUserSignIn = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/business_account" element={<Profile />} />
      <Route path="/chatbot" element={<MainPage />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      {/* {isUserSignIn && <Route path="/home" element={<HomePage />} />} */}
    </Routes>
  );
}
