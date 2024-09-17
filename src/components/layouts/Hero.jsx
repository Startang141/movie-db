import InputForm from "../elements/InputForm";

const Hero = (props) => {
  const { searchMovie } = props;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white font-bold uppercase text-5xl text-center xl:w-1/2">
        Start Streaming and Dive into New Stories Every Day
      </h1>
      <InputForm onChange={searchMovie} />
    </div>
  );
};

export default Hero;
