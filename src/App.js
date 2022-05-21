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

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" component={<HomePage/>} />
          <Route path="/about" component={<AboutPage/>} />
          <Route path="/singleshow/:id" component={<SinglePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;