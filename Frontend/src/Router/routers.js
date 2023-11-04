import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Admin Dashboard/Pages/dashboard";
import Profile from "../Admin Dashboard/Pages/profile";
import MainPage from "../Admin Dashboard/Chat/mainPage";
import Setting from "../Admin Dashboard/Pages/setting";
import SignIn from "../SignIn_SignUp/signIn";
import SignUp from "../SignIn_SignUp/signUp";
import CompanyPage from "../Admin Dashboard/Companies/CompanyPage";
import Layout from "../Home/layout";
import UserProfile from "../Admin Dashboard/User Profile/UserProfile";
import Users from "../Admin Dashboard/Users/Users";
import Teams from "../Admin Dashboard/Teams/Teams";
import Contacts from "../Admin Dashboard/Contacts/Contacts";
import FootPrint from "../Admin Dashboard/FootPrint/FootPrint";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/business_account" element={<Profile />} />
      <Route path="/chatbot" element={<MainPage />} />
      <Route path="/companies" element={<CompanyPage />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/users" element={<Users />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/footprint" element={<FootPrint />} />
      <Route path="/user_profile" element={<UserProfile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}
