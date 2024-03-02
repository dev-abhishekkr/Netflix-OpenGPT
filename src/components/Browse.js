import { useSelector } from "react-redux";
import useNowPlayingMovies from "../custHooks/useNowplayingMovies";
import usePopularMovies from "../custHooks/usePopularMovies";
import useTopRatedMovies from "../custHooks/useTopRatedMovies";
import useUpcomingMovies from "../custHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
