import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";
import DataTable from "react-data-table-component";
import './app.css'


const Animales = () => {
  const url = 'https://localhost:7143/api/Animales';
  const [animales, setAnimales] = useState([]);

  const columns = [
    {
      name: 'Nombre del Animal',
      selector: row => row.nombreAnimal,
      sortable: true
    },
    {
      name: 'Foto',
      selector: row => (
        <img
          src={row.imagen} // Asigna la URL de la foto de perfil aquí
          alt={`Foto de ${row.nombreAdoptante}`}
          style={{ maxWidth: '100px' }} // Ajusta el tamaño de la imagen según tus necesidades
        />
      ),
    },
    {
      name: 'Documentos',
      selector: row => row.urlDocumentos,
      sortable: true
    },
    {
      name: 'Tipo de Animal',
      selector: row => row.tipoAnimalId,
      sortable: true
    },
    {
      name: 'Vacunas',
      selector: row => row.vacunasId,
      sortable: true
    },
    {
      name: 'Fecha de Ingreso',
      selector: row => row.fechaIngreso,
      sortable: true
    },
    {
      name: 'Estado De Salud',
      selector: row => row.estadoSalud,
      sortable: true
    },
    {
      name: 'Observaciones',
      selector: row => row.observaciones,
      sortable: true
    },
    {
      name: 'Procedencia',
      selector: row => row.procedencia,
      sortable: true
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true
    },
    {
      name: 'Edad',
      selector: row => row.edad,
      sortable: true
    },
    {
      name: 'Fundacion asociada',
      selector: row => row.fundacionId,
      sortable: true
    },
    {
      name: 'Adoptante',
      selector: row => row.adoptanteId,
      sortable: true
    },
    {
      name: 'Raza',
      selector: row => row.raza,
      sortable: true
    },
    {
      name: 'Sexo',
      selector: row => row.sexo,
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
    const getAnimales = async () => {
      axios.get(url)
        .then(res => setAnimales(res.data))
        .catch(err => console.log(err));
    }
    getAnimales();
  }, []);
  return (
    <div>
      <br />
      <div class="ui card one column stackable aligned page grid">
        <div class="content">
          <div class="center aligned header">Agregar Animal</div>
          <br></br>
          <div class="aligned">
            <form class="ui form">
              <div class="field">
                <div class="three fields">
                  <div class="field">
                    <label>Nombre animal</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Nombre del adoptante"
                    />
                  </div>
                  <div class="field">
                    <label>Foto del animal</label>
                    <div class="ui action input">
                      <input type="text" id="_attachmentName" />
                      <label
                        for="attachmentName"
                        class="ui icon button btn-file"
                      >
                        <i class="attachment basic icon"></i>
                        <input
                          type="file"
                          id="attachmentName"
                          name="attachmentName"
                          class="inputs"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="field">
                    <label>Documentos por subir</label>
                    <div class="ui action input">
                      <input type="text" id="_attachmentName" />
                      <label
                        for="attachmentName"
                        class="ui icon button btn-file"
                      >
                        <i class="attachment basic icon"></i>
                        <input
                          type="file"
                          id="attachmentName"
                          name="attachmentName"
                          class="inputs"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="three fields">
                  <div class="field">
                    <label>Tipo de animal</label>
                    <select multiple="" class="ui dropdown field">
                      <option value="" disabled selected>
                        Seleccione tipo animal
                      </option>
                      <option value="angular">Angular</option>
                      <option value="css">CSS</option>
                      <option value="design">Graphic Design</option>
                      <option value="ember">Ember</option>
                      <option value="ux">User Experience</option>
                    </select>
                  </div>
                  <div class="field">
                    <label>Vacunas</label>
                    <select multiple="" class="ui dropdown field">
                      <option value="" disabled selected>
                        Seleccione vacunas
                      </option>
                      <option value="angular">Angular</option>
                      <option value="css">CSS</option>
                      <option value="design">Graphic Design</option>
                      <option value="ember">Ember</option>
                      <option value="ux">User Experience</option>
                    </select>
                  </div>
                  <div class="field">
                    <label>Fundacion</label>
                    <select multiple="" class="ui dropdown field">
                      <option value="" disabled selected>
                        Seleccione la fundacion
                      </option>
                      <option value="angular">Angular</option>
                      <option value="css">CSS</option>
                      <option value="design">Graphic Design</option>
                      <option value="ember">Ember</option>
                      <option value="ux">User Experience</option>
                    </select>
                  </div>
                </div>
                <div class="two fields">
                  <div class="field">
                    <label>Adoptante</label>
                    <select multiple="" class="ui dropdown field">
                      <option value="" disabled selected>
                        Seleccione el adoptante
                      </option>
                      <option value="angular">Angular</option>
                      <option value="css">CSS</option>
                      <option value="design">Graphic Design</option>
                      <option value="ember">Ember</option>
                      <option value="ux">User Experience</option>
                    </select>
                  </div>
                  <div class="field">
                    <label>Sexo</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Sexo del animal"
                    />
                  </div>
                </div>
                <div class="two fields">
                  <div class="field">
                    <label>Fecha ingreso</label>
                    <input
                      type="date"
                      name="shipping[last-name]"
                      placeholder="Escribe la direccion de residencia"
                    />
                  </div>
                  <div class="field">
                    <label>Estado de salud</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Escribe el estado de salud"
                    />
                  </div>
                </div>
                <div class="field">
                  <label>Observaciones</label>
                  <textarea
                    placeholder="Observaciones adicionales del animal"
                    rows="3"
                  ></textarea>
                </div>
                <div class="four fields">
                  <div class="field">
                    <label>Procedencia</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Procedencia del animal"
                    />
                  </div>
                  <div class="field">
                    <label>Estado</label>
                    <input
                      type="checkbox"
                      name="shipping[last-name]"
                      placeholder="El animal esta activo o inactivo en la fundacion"
                    />
                  </div>
                  <div class="field">
                    <label>Edad</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Edad estimada del animal"
                    />
                  </div>
                  <div class="field">
                    <label>Raza</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Raza del animal"
                    />
                  </div>
                </div>
              </div>
              <div class="extra content">
                <button class="ui violet button" type="submit">
                  <i class="fa-solid fa-plus"></i>
                  Agregar animal
                </button>
                <button class="ui yellow button" type="submit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  Editar animal
                </button>
                <button class="ui negative button" type="submit">
                  <i class="fa-solid fa-trash"></i>
                  Eliminar animal
                </button>
                <td data-label="Job"></td>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="ui header">Listado de animales</h1>
        <hr />
        <DataTable
          columns={columns}
          data={animales}
          rdt_TableHeader
          pagination
          selectableRows
        >
        </DataTable>
        
      </div>
    </div>
  );
};

export default Animales;
