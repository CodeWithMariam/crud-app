import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import TablePage from './App'; // Employee management component

const PrivateRoute = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AdminLogin />} />
                <Route
                    path="/employees"
                    element={
                        <PrivateRoute>
                            <TablePage />
                        </PrivateRoute>
                    }
                />
                {/* <Route path="*" element={<Navigate to="/login" />} />  */}
                {/* Redirect unmatched routes */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
