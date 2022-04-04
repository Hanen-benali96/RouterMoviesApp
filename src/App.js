import NavBar from "./components/NaBar";
import MoviesList from "./components/MovieList";
import { useState } from "react";
import { movies } from "./data/MovieData"
import AddMovie from "./components/AddMovie";
import {Route,Routes} from "react-router-dom"
import WatchTrailer from "./components/WotchTrailer";

function App() {
  const [moviesList, setmoviesList] = useState(movies)
  const [titleSearch, settitleSearch] = useState("");
  const [show, setIsShow] = useState(false)
  const [rating, setRating] = useState(1)
  return (
    <div>
      
      < NavBar
        settitleSearch={settitleSearch}
        showModal={setIsShow}
        setRating ={setRating}/>
        <AddMovie show={show} setIsShow={setIsShow} saveMovie={setmoviesList} />
        <Routes>
        <Route path="/movies" element={<MoviesList moviesList={moviesList} titleSearch={titleSearch} rating ={rating}/>} />
        <Route path="/watchtrailer/:id" element={<WatchTrailer moviesList={moviesList} />} />
        </Routes>
    </div>
  );
}

export default App;