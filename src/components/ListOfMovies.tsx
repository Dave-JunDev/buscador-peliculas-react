import  { Movie } from './../Interfaces/IMovie'

export default function ListOfMovies(movies : {Search : Array<Movie> | undefined}){
    return (
      <ul className="movies">
        {movies.Search?.map((movie) => (
          <li className="movie" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Year}></img>
          </li>
        ))}
      </ul>
    );
}

function ListOfNoMovies(){
    return (
        <p>no se encontraron resultados</p>
    );
}

export function Movies(movies : {Search: Array<Movie>}){
    const hasMovies = movies.Search?.length > 0;
    return (
        hasMovies ?
        <ListOfMovies {...movies}/>
        :
        <ListOfNoMovies/>
    )

}