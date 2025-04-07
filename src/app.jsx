import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <div className="container-fluid">
          <div className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">WordGames</div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink></NavLink>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
