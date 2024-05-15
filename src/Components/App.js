import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import { Vacunas } from "../Views/Vacunas";
import { Fundaciones } from "../Views/Fundaciones";
import { Adoptantes } from "../Views/Adoptantes";
import Animales from "../Views/Animales";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/Vacunas" element={<Vacunas />} />
            <Route path="/Fundaciones" element={<Fundaciones />} />
            <Route path="/Adoptantes" element={<Adoptantes />} />
            <Route path="/Animales" element={<Animales />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
