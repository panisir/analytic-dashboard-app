// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import Dashboard from './components/dashboard/Dashboard';
import NewLogin from './components/NewLogin';
import { APIProvider } from './context/APIContext';

const privateRoutes = [
  { path: '/home', component: Home },
  { path: "*", component: NotFoundPage },
  { path: '/dashboard', component: Dashboard }
  // Add more protected routes as needed
];

const App = () => {
  return (
    <AuthProvider>
      <APIProvider>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Protected Routes */}
            {privateRoutes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<PrivateRoute><Component /></PrivateRoute>} />
            ))}
            <Route path="/login" element={<NewLogin />} />
          </Routes>
        </Router>
      </APIProvider>
    </AuthProvider>
  );
};

export default App;
