import React from 'react'

const TarjetaPelicula = ({movie1}) => {
  return (
    <div className='card'>

        <div>
            <img src={movie1.Poster !== "N/A"? movie1.Poster: "https://via.placeholder.com/400"} alt={movie1.Title}/>
        </div>

        <div className='movie'>
        <p>{movie1.Year}</p>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
        </div>
    </div>
  )
}

export default TarjetaPelicula
