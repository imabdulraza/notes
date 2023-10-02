import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import RequireAuth from './api/authentication/requireAuth';
import { AuthProvider } from './api/authentication/authProvider';

import Layout from './containers/layout';
import Home from './containers/layout/home';
import AdminDashboard from './containers/admin/dashboard';
import UserDashboard from './containers/user/dashboard';
import AdminProfile from './containers/admin/profile';
import UserProfile from './containers/user/profile';
import SignIn from './containers/account/signin';
import SignUp from './containers/account/signup';
import ForgotPassword from './containers/account/forgotPassword';
import ResetPassword from './containers/account/resetPassword';
import Notes from './containers/notes';

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

function App() {

  const handleClick = () => {
    console.info('button clicked')
  };

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/admin" element={<RequireAuth permission={[String(Roles.ADMIN)]} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          <Route path="/user" element={<RequireAuth permission={[String(Roles.USER)]} />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="notes" element={<Notes />} />
          </Route>

        </Route>

        {/* <Route path="*" element={<>NOT found</>} /> */}

      </Routes>
    </AuthProvider>
  );
}

export default App;