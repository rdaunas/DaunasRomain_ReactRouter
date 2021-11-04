
import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";
import logo from "../../img/LOGO.svg"

class Nav extends React.Component {

    render() {
      return (
        <div class="nav">
          <img src={logo} alt=""/>
          <div>
          <Router>
              <Link to="/">Accueil</Link>
              <Link to="/apropos">A Propos</Link> 
          </Router>
          </div>
        </div>
      );
    }
  }

  export default Nav;