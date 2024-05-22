import React from "react";
import "./app.css";

const Inicio = () => {
return (
    <body id="root">
    <div class="ui vertical center aligned segment">
        <br/>
        <nav class="ui container">
        <h1 class="ui header">
            Sistema para la gestion animal en fundaciones
        </h1>
        </nav>
        <br/>
        <div class="ui content container">
        <p>
            Sistema diseñado para ayudar a fundaciones en el manejo ágil y
            preciso de animales. 
            <br/>
            Este proyecto tiene como objetivo facilitar el
            ingreso, seguimiento y adopción de animales rescatados
        </p>
        <div class="ui blue button">Leer Mas</div>
        </div>
        <br/>
        <footer class="ui inverted vertical segment rounded">
            Sistema diseñado por: <a>@Copytight - Brayam Fajardo</a>.
        </footer>
    </div>
    </body>
);
};

export default Inicio;
