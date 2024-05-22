import React, { Component } from "react";
import { Link } from "react-router-dom";

const linkVacunas = [
  {
    name: "Vacunas",
    href: "/Vacunas",
  },
];
const linkFundaciones = [
  {
    name: "Fundaciones",
    href: "/Fundaciones",
  },
];
const linkAdoptantes = [
  {
    name: "Adoptantes",
    href: "/Adoptantes",
  },
];
const linkAnimales = [
  {
    name: "Animales",
    href: "/Animales",
  },
];

const linkInicio = [
  {
    name: "Inicio",
    href: "/Inicio",
  },
];

const estilos = {
  seccion: {
    fontFamily: "Radio Canada Big",
    fontSize: "5rem",
  },
};

class NavBar extends Component {
  render() {
    return (
      <div>
        <div class="ui divider horizontal computer only row">
          <div class="ui header huge" style={estilos.seccion}>
            PET<i class="fa-solid fa-paw"></i>GUARDIAN
          </div>
        </div>
        <div class="ui inverted divider"></div>
        <div class="">
          <div class="ui menu five item pointing secondary">
            <div class="item active ">
              {linkInicio.map((x) => (
                <Link to={x.href}>{x.name}</Link>
              ))}
            </div>
            <div class="item">
              {linkVacunas.map((x) => (
                <Link to={x.href}>{x.name}</Link>
              ))}
            </div>
            <div class="item">
              {linkFundaciones.map((x) => (
                <Link to={x.href}>{x.name}</Link>
              ))}
            </div>
            <div class="item">
              {linkAdoptantes.map((x) => (
                <Link to={x.href}>{x.name}</Link>
              ))}
            </div>
            <div class="item">
              {linkAnimales.map((x) => (
                <Link to={x.href}>{x.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
