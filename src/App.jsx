import { useState, useEffect } from 'react'
import Movie from './data/movie'


function App() {

  const [movie, setMovie] = useState(Movie)

  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movie)

  useEffect(() => {
    setFilteredMovies(
      movie.filter(element => {
        const { title, genre } = element;
        return genre.toLowerCase().includes(search.toLowerCase()) ||
          title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, movie]);


  return (
    <>
      <div className="container text-center">

        <h1>Che film vuoi guardare oggi?</h1>
        <h3>Seleziona la categoria!</h3>

        <select className='form-select' 
        value={search} 
        onChange={ (e) => setSearch(e.target.value)}
        >
          <option value="" disabled>Seleziona un'opzione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <ul className='list-group'>
          {filteredMovies.map(({id,title}) => (
            <li className='list-group-item fs-3' key={id}>
              {title}
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App
