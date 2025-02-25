import { useState, useEffect } from 'react'
import Movie from './data/movie'

function App() {

  const [movie, setMovie] = useState(Movie)
  const [filteredMovies, setFilteredMovies] = useState(movie)
  const [search, setSearch] = useState('')
  const [newMovie, setNewMovie] = useState('')

  useEffect(() => {
    setFilteredMovies(
      movie.filter(element => {
        const { title, genre } = element;
        return genre.toLowerCase().includes(search.toLowerCase()) ||
          title.toLowerCase().includes(search.toLowerCase());
      })
    );

  }, [search, movie]);

  const addMovie = (e) => {
    e.preventDefault();
    const movies = newMovie.trim()

    setMovie([...movie, { title: movies, genre: 'Sconosciuto' }])
    setNewMovie('')
  }

  return (
    <>
      <div className="container text-center">

        <h1>Che film vuoi guardare oggi?</h1>
        <h3>Seleziona la categoria!</h3>

        <select className='form-select'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          <option value="" disabled>Seleziona un'opzione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
          <option value="Drammatico">Drammatico</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Storico">Storico</option>
          <option value="Musicale">Musicale</option>
          <option value="Guerra">Guerra</option>
          <option value="Western">Western</option>
          <option value="Sconosciuto">Sconosciuto</option>
        </select>

        <input type="text"
          className='form-control'
          placeholder='Che film vorresti vedere?'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className='list-group'>
          {filteredMovies.map(({ title, genre, index }) => (
            <li className='list-group-item fs-3' key={index}>
              {title} - "{genre}"
            </li>
          ))}
        </ul>

        <form onSubmit={addMovie}>
          <input type="text"
            className='form-control'
            placeholder='Aggiungi film'
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)} />

          <button type="submit" className="btn btn-primary mt-2">
            Aggiungi
          </button>
        </form>
      </div>
    </>
  )
}

export default App
