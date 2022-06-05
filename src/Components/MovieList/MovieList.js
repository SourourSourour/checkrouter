import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'

const MovieList = ({movies}) => {
  return (
    <div> {movies.map((el)=><MovieCard el={el}/>)}</div>
  )
}

export default MovieList