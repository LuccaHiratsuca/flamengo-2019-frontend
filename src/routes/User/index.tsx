import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/User/Login/Login';
import { Details } from '../../pages/User/Details/Details';

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default UserRoutes;