import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "../pages/PageMovies";
import Root from "./root";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children: [
            {
                path: "Movies",
                element: <Movie></Movie>
            }
        ]
    }
])
export default function Router(){
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}