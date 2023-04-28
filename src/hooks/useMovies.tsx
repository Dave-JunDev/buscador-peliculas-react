import { useCallback, useState } from "react";
import GetMovies from "../Services/getMovies";
import { Movie } from "../Interfaces/IMovie";

export function useMovies({name} : {name : string} ){
    const [movies, setMovies] = useState<Array<Movie>>();
    const getMovies = useCallback(async () => {
      const newMovies = await GetMovies({name})
      setMovies(newMovies);
    }, [name]);

    return { movies, getMovies}
}