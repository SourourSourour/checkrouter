import {movies} from "./data"
import './App.css';
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import { useState } from "react";
import Filter from "./Components/Filter/Filter";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() { 
  const [dataN, setDataN] = useState(movies)
  const GetMovie=(NewMovie)=>{NewMovie.title?
    setDataN([...dataN,{...NewMovie,id:dataN.length}]):alert("title is required")
    
  }
  const  [newRate, setNewRate] = useState(0)
  const [newTitle, setNewTitle] = useState("")
  const  searchMovie=(x)=>{setNewTitle(x)}
  
  return (
    <div className="App">
      <Routes>
        <Route path="/movieDetails/:id" element={<MovieDetails movies={dataN}/>}/>
        <Route path="/" element={<div>  <AddMovie GetMovie={GetMovie}/>
       <Filter searchMovie={searchMovie} setNewRate={setNewRate}/>
     <MovieList movies={dataN.filter((el)=>{return el.title.toLocaleLowerCase().includes(newTitle.toLocaleLowerCase().trim())&& el.rating>=newRate})}/></div>}/>




        
      
    
    
     </Routes>
    </div>
  );
}

export default App;
