import { Movie } from "../Interfaces/IMovie";

const API_KEY : string = "71eff3ad";
export default async function GetMovies({name} : {name : string}){
    try
    {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`);
        const json = await response.json();

        const movies : Array<Movie> = json.Search;
        return movies;

    } catch (e) {
        throw new Error('Error searching movies');
    }
}