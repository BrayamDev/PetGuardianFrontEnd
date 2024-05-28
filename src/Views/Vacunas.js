import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";
import DataTable from "react-data-table-component";
import "./app.css";
import { useNavigate } from "react-router-dom";


export const Vacunas = () => {

  const url = 'https://localhost:7143/api/vacunas';
  const [vacunas, setVacunas] = useState([]);
  const navegacion  = useNavigate();

  //! Metodo GET

  const columns = [
    {
      name: 'Nombre de la vacuna',

      selector: row => row.nombreVacuna,
      sortable: true
    },
    {
      name: 'Fecha de caducidad',
      selector: row => row.fechaCaducidad,
      sortable: true
    },
    {
      name: 'Editar',
      cell: row => (
        <button class="ui button" onClick={() => handleEdit(row)}>Editar Vacuna</button>
      )
    },
    {
      name: 'Eliminar',
      cell: row => (
        <button class="ui button" onClick={() => handleDelete(row)}>Eliminar vacuna</button>
      )
    }
  ]

  useEffect(() => {
    const getVacunas = async () => {
      axios.get(url)
        .then(res => setVacunas(res.data))
        .catch(err => console.log(err));
    }
    getVacunas();
  }, []);

  //! Metodo POST
  const data = {nombreVacuna: "", fechaCaducidad : ""}; 
  const [vacunasEnvio, setVacunasEnvio] = useState(data);

  const entradaDatos = (event)=>{
    setVacunasEnvio({...vacunasEnvio, [event.target.name]: event.target.value})
  }

  function salidaDatos(event) {
    event.preventDefault()
    console.log(vacunasEnvio)
    axios.post(url, vacunasEnvio)
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
  }
  //! Metodo PUT
  const handleEdit = (row) => {
    const vacunaId = row.id;
    const urlVacunaSeleccionada = `https://localhost:7143/api/vacunas/${vacunaId}`;
    
    axios.put(urlVacunaSeleccionada, vacunasEnvio)
    .then(Response => console.log(Response))
    .catch(err => console.log(err))   
  };

  //! Metodo DELETE
  const handleDelete = (row) => {

    const vacunaId = row.id;
    const urlVacunaSeleccionada = `https://localhost:7143/api/vacunas/${vacunaId}`;

      axios.delete(urlVacunaSeleccionada)
      .then(response => {
          console.log(response.data);
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <br />
      <div class="ui card ui one column stackable center aligned page grid">
        <div class="content">
          <div class="center aligned header">Agrega tus vacunas</div>
          <div class="center aligned description">
            <form class="ui form" onSubmit={salidaDatos}>
              <div class="field">
                <div class="two fields">
                  <div class="field">
                    <label>Nombre de la vacuna</label>
                    <input
                      type="text"
                      name="nombreVacuna"
                      placeholder="Nombre de la vacuna"
                      onChange={entradaDatos}
                      value={vacunasEnvio.nombreVacuna}
                    />
                  </div>
                  <div class="field">
                    <label>Fecha de caducidad</label>
                    <input
                      type="date"
                      name="fechaCaducidad"
                      value={vacunasEnvio.fechaCaducidad}
                      onChange={entradaDatos}
                    />
                  </div>
                </div>
              </div>
              <div class="extra content">
                <button class="ui violet button" type="submit" onClick={salidaDatos}>
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