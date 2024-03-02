const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3 ">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 px-3 md:py-2 md:px-9 text-lg  rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-2 px-9 text-lg ml-2 bg-opacity-60 rounded-lg hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
