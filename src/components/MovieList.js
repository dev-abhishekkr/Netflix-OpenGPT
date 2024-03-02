import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="px-2">
      <h1 className="text-lg md:text-3xl py-4 text-white bg-opacity-80">
        {title}
      </h1>
      <div className="flex overflow-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

//overflow-x-scroll
