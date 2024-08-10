import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import SignInSide from '../screens/Authentication/SignInScreen';
import SignUp from '../screens/Authentication/SignUpScreen';
import ResponsiveDrawer from './drawer';
import Events from '../screens/Events/EventsScreen';
import { Dashboard } from '../screens/Dashboard/DashboardScreen';
import Sports from '../screens/Sports/SportsScreen';
import Navbar from '../screens/Information/components/Navbar';
import OurCause from '../screens/OurCause/OurCauseScreen';
import Welcome from '../screens/Welcome/WelcomeScreen';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
//import CauseScreen from '../screens/Cause/CauseScreen';

const isAuthenticated = () => {
  // Add your authentication logic here
  // For example, check if a user token exists in localStorage or context
  return localStorage.getItem('utoken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth/login" />;
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<SignInSide />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/portal" element={<ProtectedRoute><ResponsiveDrawer /></ProtectedRoute>}>
          <Route path="/portal/dashboard" element={<Dashboard />} />
          <Route path="/portal/events" element={<Events />} />
          <Route path="/portal/sport/:id" element={<Sports />} />
                    <Route path="/portal/changepassword" element={<ChangePassword />} />

        </Route>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/ourcause" element={<OurCause />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Main;
