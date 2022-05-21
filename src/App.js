/*import React { BrowserRouter as Router, Switch, Route } from "react-router-dom";*/

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";
import FourOhFour from "./pages/404";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/singleshow/:id" element={<SinglePage/>} />
          <Route exact path="*" element={<FourOhFour/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;