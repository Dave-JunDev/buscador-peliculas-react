import { useEffect, useRef, useState } from "react";
import ListOfMovies from "../components/ListOfMovies";
import { useMovies } from "../hooks/useMovies";
import './../css/movie.css'

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

  }, [search])

  return { search, updateSearch, error }
}

export default function PageMovies(){
  const { search, updateSearch, error } = useSearch();
  const { movies , getMovies } = useMovies({name: search});

  const handelSumbit = (event : any) => {
    event.preventDefault();
    getMovies()
  }

  const handleChange = (event : any) => {
    updateSearch(event.target.value)
  }

  const cop = {Search : movies};

    return (
      <>
        <div className="page">
          <header>
            <h1>Buscador de peliculas</h1>
            <form className="form" onSubmit={handelSumbit}>
              <input
                style={{
                  border: "1px solid transparent",
                  borderColor: error ? 'red' : 'transparent'
                }}
                value = {search}
                onChange={handleChange}
                type="text"
                placeholder="Avengers, Matrix, Tron"
                name="query"
              />
              <button type="submit">Buscar</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
          </header>
          <main>
          <ListOfMovies {...cop}></ListOfMovies>
          </main>
        </div>
      </>
    );
}