import GptSearchSpace from "./GptSearchSpace";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOG_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-fit"
          src={LOG_BG}
          alt="gpt-bg"
        />
      </div>
      <div className="">
        <GptSearchSpace />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
