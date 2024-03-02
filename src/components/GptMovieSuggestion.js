import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  // if (typeof movieNames !== "object") {
  //   // Convert the movieNames variable to an array
  //   movieNames = Array.from(movieNames);
  // }
  const movieArray = movieResults.movieNames;

  return (
    <div className="p-4 m-4 bg-black text-white  bg-opacity-70 ">
      <div>
        {movieArray.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults.movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
