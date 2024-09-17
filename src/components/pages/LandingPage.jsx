import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../../Services/movie.service";
import Hero from "../layouts/Hero";
import MovieList from "../layouts/MovieList";
import Navbar from "../layouts/Navbar";

const LandingPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      const movieList = await getMovieList();
      setMovieList(movieList);
    };
    fetchMovieList();
  }, []);

  const HandleSearchMovie = async (q) => {
    if (q.target.value.length > 0) {
      const searchResults = await searchMovie(q.target.value);
      setMovieList(searchResults);
    }
  };

  return (
    <div className="bg-slate-950 px-10 min-h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      <Hero searchMovie={HandleSearchMovie}></Hero>
      <MovieList movieList={movieList}></MovieList>
    </div>
  );
};

export default LandingPage;
