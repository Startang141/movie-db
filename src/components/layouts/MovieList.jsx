import { Link } from "react-router-dom";
import CardMovie from "../fragments/CardMovie";

const MovieList = (props) => {
  const { movieList } = props;
  return (
    <div className="text-white pb-4">
      <h2 className="font-normal text-2xl mb-4">Popular Movies</h2>
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 scrollbar pb-4">
        {movieList?.map((movie, i) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <CardMovie
              title={movie.title}
              image={movie.poster_path}
              rating={movie.vote_average}
              release={movie.release_date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
