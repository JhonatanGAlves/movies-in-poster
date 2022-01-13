import React, { useState, useEffect } from 'react'
import './styles.css'

type Movie = {
  titulo: string,
  avatar: string
}

const MoviesPoster = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
      let response = await fetch('https://api.b7web.com.br/cinema/')
      let json = await response.json()
      setMovies(json)

    } catch (e) {
      setMovies([])
      alert('Estamos com problema no nosso servidor, tente novamente mais tarde, por favor!')
      console.error(e)
    }
  }

  return (
    <>
      <div className='container-movies'>
        {movies.map((movie, index) => (
          <div key={index} className='movie-list'>
            <img src={movie.avatar} alt="Poster dos filmes" />
            <h3>{movie.titulo}</h3>
          </div>
        ))}
      </div>
    </>
  )

}

export default MoviesPoster