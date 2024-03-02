import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //fecth TMDB API and update now playing movies in Store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPoularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPoularMovies();
  }, []);
};

export default usePopularMovies;
