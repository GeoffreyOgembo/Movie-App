/*import React { BrowserRouter as Router, Switch, Route } from "react-router-dom";*/
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import SinglePage from "./pages/Singlepage";
import FourOhFour from "./pages/404";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route element = {<ProtectedRoutes/>}>
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/singleshow/:id" element={<SinglePage/>} />
          <Route exact path="*" element={<FourOhFour/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;