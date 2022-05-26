import React from 'react'
import { Outlet } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
// import Homepage from './pages/Homepage';
// import { Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return (
    isAuth? <Outlet/> : <Loginpage/>
  )
}

export default ProtectedRoutes