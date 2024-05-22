import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";
import DataTable from "react-data-table-component";
import "./app.css";


export const Vacunas = () => {
  const url = 'https://localhost:7143/api/vacunas';
  const [vacunas, setVacunas] = useState([]);

  const columns = [
    {
      name: 'Nombre de la vacuna',
      selector: row => row.nombreVacuna,
      sortable : true
    },
    {
      name: 'Fecha de caducidad',
      selector: row => row.fechaCaducidad,
      sortable : true
    },
    {
      name: 'Editar'
    },
    {
      name: 'Eliminar'
    },
  ]

  useEffect(() => {
    const getVacunas = async () => {
      axios.get(url)
        .then(res => setVacunas(res.data))
        .catch(err => console.log(err));
    }
    getVacunas();
  }, []);

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
                <td data-label="Job">
                </td>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="ui header">Listado de vacunas</h1>
        <hr />
        <div>
          <DataTable
            columns={columns}
            data={vacunas}
            pagination
            selectableRows
          >
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Vacunas