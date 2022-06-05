import React from 'react'
import ReactStars from "react-rating-stars-component"


const Filter = ({searchMovie,setNewRate}) => {
  return (
    <div> <input onChange={(e)=>searchMovie(e.target.value)} type="text" placeholder='search a movie'/>
    <ReactStars
    count={5}
   edit={true}
   onChange={setNewRate}
    size={24}
    activeColor="#ffd700"

  />
    
     </div>
    
    
  )
}

export default Filter