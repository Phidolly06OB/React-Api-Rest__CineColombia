import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import buscadorIcono from "./buscador.svg";
import TarjetaPelicula from "./componentes/tarjetaPelicula";

//b4cc59ce

const apiUrl = "http://www.omdbapi.com?apikey=b4cc59ce";

const App = () => {
  const [movies, setMovies] = useState([]);
  const[busquedaParam, setBusquedaParam] =useState([''])

  const buscadorCine = async (titulo) => {
    const resposne = await fetch(`${apiUrl}&s=${titulo}`);
    const data = await resposne.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    buscadorCine("home");
  }, []);
  return (
    <div className="app">
      <h1>Cine Colombia</h1>
      <div className="busqueda">
        <input
          placeholder="Buscar Pelicula"
          value= {busquedaParam}
          onChange={(e) => setBusquedaParam(e.target.value)}
        />
        <img 
          src={buscadorIcono} 
          alt="Buscar" 
          onClick={() => buscadorCine(busquedaParam)} />

      </div>

      {movies?.length > 0 ? (
        <div className="contenedor">
          {movies.map((movie) => (
            <TarjetaPelicula movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No se encontro pelicula</h2>
        </div>
      )}
    </div>
  );
};

export default App;
