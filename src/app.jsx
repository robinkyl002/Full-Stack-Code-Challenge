import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import { Home } from "./home/home";
import { Play } from "./play/play";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">WordGames</div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="play">
                  Play
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play" element={<Play />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
