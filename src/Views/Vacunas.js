import React from "react";

export const Vacunas = () => {
  return (
    <div>
      <br />
      <div class="ui card ui one column stackable center aligned page grid">
        <div class="content">
          <div class="center aligned header">Agrega tus vacunas</div>
          <div class="center aligned description">
            <form class="ui form">
              <div class="field">
                <div class="two fields">
                  <div class="field">
                    <label>Nombre de la vacuna</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Nombre de la vacuna"
                    />
                  </div>
                  <div class="field">
                    <label>Fecha de caducidad</label>
                    <input
                      type="date"
                      name="shipping[last-name]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div class="extra content">
                <button class="ui violet button" type="submit">
                  <i class="fa-solid fa-plus"></i>
                  Agregar vacuna
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="ui header">Listado de vacunas</h1>
        <hr />
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Nombre de la vacuna</th>
              <th>Fecha de caducidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">James</td>
              <td data-label="Age">24</td>
              <td data-label="Job">
                <a href="#" class="ui yellow button">
                  <i class="fa-solid fa-pen-to-square"></i> Editar
                </a>
                <a href="#" class="ui negative button">
                  <i class="fa-solid fa-trash"></i> Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
