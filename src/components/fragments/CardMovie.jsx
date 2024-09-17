const CardMovie = (props) => {
  const { title, image, rating, release } = props;
  return (
    <div className="text-white w-48 xl:w-56 shrink-0">
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        className="h-72 xl:h-80 w-full object-cover rounded-lg"
      />
      <div>
        <h2 className="font-semibold text-lg mt-2">
          {title.length > 15 ? `${title.substring(0, 20)}...` : title}
        </h2>
        <div className="flex items-center gap-2 mt-1 text-sm">
          <div className="flex items-center gap-2 border-r-2 border-gray-700 pr-2">
            <img src="/star.svg" width={10} alt="" />
            {rating}
          </div>
          <p>{release}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
