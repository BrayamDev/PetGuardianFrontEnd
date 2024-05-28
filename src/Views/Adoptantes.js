import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";
import DataTable from "react-data-table-component";
import './app.css'

export const Adoptantes = () => {

  const url = 'https://localhost:7143/api/Adoptantes';
  const [adoptantes, setAdoptantes] = useState([]);

  const columns = [
    {
      name: 'Nombre adoptante',
      selector: row => row.nombreAdoptante,
      sortable: true
    },
    {
      name: 'Numero de documento',
      selector: row => row.numeroDocumento,
      sortable: true
    },
    {
      name: 'Numero de contacto',
      selector: row => row.numeroContacto,
      sortable: true
    },
    {
      name: 'Numero de emergencia',
      selector: row => row.numeroEmergencia,
      sortable: true
    },
    {
      name: 'Foto de perfil',
      selector: row => (
        <img
          src={row.foto} // Asigna la URL de la foto de perfil aquí
          alt={`Foto de ${row.nombreAdoptante}`}
          style={{ maxWidth: '100px' }} // Ajusta el tamaño de la imagen según tus necesidades
        />
      ),
      sortable: true
    }, 
    {
      name: 'Direccion de residencia',
      selector: row => row.direccionResidencia,
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
    const getAdoptantes = async () => {
      axios.get(url)
        .then(res => setAdoptantes(res.data))
        .catch(err => console.log(err));
    }
    getAdoptantes();
  }, []);


  return (
    <div>
      <br />
      <div class='ui card ui one column stackable center aligned page grid'>
        <div class='content'>
          <div class='center aligned header'>Agregar adoptante</div>
          <div class='center aligned description'>
            <form class='ui form'>
              <div class='field'>
                <div class='two fields'>
                  <div class='field'>
                    <label>Nombre adoptante</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Nombre del adoptante'
                    />
                  </div>
                  <div class='field'>
                    <label>Numero de documento</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Escribe tu numero de documento'
                    />
                  </div>
                  <div class='field'>
                    <label>Numero de contacto</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Escribe tu numero de contacto'
                    />
                  </div>
                  <div class='field'>
                    <label>Numero de emergencia</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Escribe tu numero de emergencia'
                    />
                  </div>
                </div>
                <div class='two fields'>
                  <div class='field'>
                    <label>Direccion de residencia</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Escribe la direccion de residencia'
                    />
                  </div>
                  <div class='field'>
                    <label>
                      <i class='ui upload icon'></i>
                      Subir foto de perfil
                    </label>
                    <input type='file' class='ui teal button' />
                  </div>
                </div>
              </div>
              <div class='extra content'>
                <button class='ui violet button' type='submit'>
                  <i class='fa-solid fa-plus'></i>
                  Agregar adoptante
                </button>
                <td data-label='Job'></td>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class='container'>
        <h1 class='ui header'>Listado de adoptantes</h1>
        <hr />
        <DataTable
          columns={columns}
          data={adoptantes}
          pagination
          selectableRows
        >
        </DataTable>


      </div>
    </div>
  )
}
