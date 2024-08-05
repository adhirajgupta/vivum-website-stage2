// Main.js or Routes.js
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
import Overview from '../screens/Information/OverviewScreen';

const isAuthenticated = () => {
  // Add your authentication logic here
  // For example, check if a user token exists in localStorage or context

  return localStorage.getItem('utoken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? (

children
  )
   : 
  <Navigate to="/auth/login" />;
};

const ErrorPage = () => {
  console.log("exec")
  const navigate = useNavigate()
  const changePath = () => {
    navigate('/dashboard')
  }

  return (
    <Navigate to="/auth/login" />
  );

}


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
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        /> */}
        <Route path='/auth' >
          <Route path='/auth/login' element={<SignInSide />} />
          <Route path='/auth/signup' element={<SignUp />} />
        </Route>
        <Route path='/' element={<ProtectedRoute>
          <ResponsiveDrawer />
        </ProtectedRoute>
        } >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/events' element={<Events />} />
          <Route path='/sport/:id' element={<Sports />} />
        </Route>
        <Route path='/information' element={<Navbar />} >
          <Route path='/information/overview' element={<Overview />} />
          {/* <Route path='/information/sports' element={<Events />} errorElement={<ErrorPage />} />
          <Route path='/information/culturals' element={<Sports />} errorElement={<ErrorPage />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Add this line */}

      </Routes>
    </Router>
  );
};

export default Main;
