import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";
import DataTable from "react-data-table-component";
import "./app.css";

export const Fundaciones = () => {

  const url = 'https://localhost:7143/api/fundaciones';
  const [fundaciones, setFundaciones] = useState([]);

  const columns = [
    {
      name: 'Nombre Fundacion',
      selector: row => row.nombreFundacion,
      sortable: true
    },
    {
      name: 'NIT',
      selector: row => row.nit,
      sortable: true
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion,
      sortable: true
    },
    {
      name: 'Editar'
    },
    {
      name: 'Eliminar'
    },
  ]
  useEffect(() => {
    const getFundaciones = async () => {
      axios.get(url)
        .then(res => setFundaciones(res.data))
        .catch(err => console.log(err));
    }
    getFundaciones();
  }, []);

  return (
    <div>
      <br />
      <div class="ui card ui one column stackable center aligned page grid">
        <div class="content">
          <div class="center aligned header">Agregar fundacion</div>
          <div class="center aligned description">
            <form class="ui form">
              <div class="field">
                <div class="two fields">
                  <div class="field">
                    <label>Nombre Fundacion</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Nombre de la fundacion"
                    />
                  </div>
                  <div class="field">
                    <label>NIT</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Escribe tu NIT"
                    />
                  </div>
                  <div class="field">
                    <label>Estado</label>
                    <input
                      type="checkbox"
                      name="shipping[last-name]"
                      placeholder="Escribe tu NIT"
                    />
                  </div>
                </div>
                <div class="field">
                  <label>Descripcion</label>
                  <textarea placeholder="Describe tu fundacion" rows="3"></textarea>
                </div>
              </div>
              <div class="extra content">
                <button class="ui violet button" type="submit">
                  <i class="fa-solid fa-plus"></i>
                  Agregar fundacion
                </button>
                <td data-label="Job">
                </td>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="ui header">Listado de fundaciones</h1>
        <hr />
        <DataTable
          columns={columns}
          data={fundaciones}
          pagination
          selectableRows
        >
        </DataTable>
      </div>
    </div>
  )
}
