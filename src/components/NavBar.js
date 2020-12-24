import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import './NavBar.css';


function NavBar() {
  return (
    <Router  >
      <div className="container">
          <nav>
          <ul>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
        

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
        </Switch>
     
    </Router>
  );
}

export default NavBar;
