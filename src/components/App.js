import React from 'react'
import Signup from './authentication/Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'
import Dashboard from './google-drive/Dashboard';

function App() {
  return (
    <AuthProvider>
          <Router>
            <AuthProvider>
              <Routes>
                {/* Drive Routes */}
                <Route exact path="/" element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute> 
                  } />
                <Route exact path="/folder/:folderId" element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute> 
                  } />
                

                {/* Profile Routes */}
                <Route path="/user" 
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute> 
                  }/>
                <Route path="/updateprofile" 
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute> 
                  }/>

                {/* Authetication Routes */}
                <Route path="/signup" Component={Signup} />
                <Route path="/login" Component={Login} />
                <Route path="/forgotpassword" Component={ForgotPassword} />

              </Routes>
            </AuthProvider>
          </Router>
    </AuthProvider> 
  )
}

export default App;
