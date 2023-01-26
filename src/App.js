import {useEffect,useState} from 'react'
import Movie from './Components/Movie';
import Filter from './Components/Filter';
import './App.css';
import { motion } from "framer-motion"

function App() {
  const [popular,setPopular] = useState([]);
  const [filtered,setFiltered] =useState([])
  const [activeGenre,setActiveGenre]=useState(0)
useEffect(() => {
  fetchPopular();
},[]);



  const fetchPopular = async () => {
  const data= await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=002f45e7d56066b7503bddca0e16ee67&language=en-US&page=1");
  const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results)
   
  };

  return (
    <div className="App">
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre}/>

      <div className='popular-movies'>
      {filtered.map((movie) => {
      return <Movie key={movie.id} movie={movie} />;
 } )}
      </div>
      
    </div>
  );
}

export default App;
