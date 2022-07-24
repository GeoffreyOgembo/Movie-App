import React from 'react'
import { Outlet } from 'react-router-dom';
import LoginPage from './pages/Loginpage';

const useAuth = () => {
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return (
    isAuth? <Outlet/> : <LoginPage/>
  )
}

export default ProtectedRoutes;
