import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../Services/movie.service";
import Navbar from "../layouts/Navbar";

const DetailMovie = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    const handleGetMovieDetail = async (id) => {
      const movieDetail = await getMovieDetail(id);
      setDetailMovie(movieDetail);
    };
    handleGetMovieDetail(id);
  }, []);

  console.log(detailMovie);

  return (
    <div className="bg-slate-950 px-10 min-h-screen">
      <Navbar></Navbar>
      <div>
        {detailMovie && (
          <div className="text-white">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
              alt={detailMovie.title}
              className="w-full h-96 object-cover rounded-lg "
            />
            <div>
              <h1 className="font-bold text-5xl uppercase">
                {detailMovie.title}
              </h1>
              <div>
                <ul className="flex flex-wrap items-center gap-2 my-4">
                  {detailMovie.genres && detailMovie.genres.length > 0 ? (
                    detailMovie.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="text-md px-2 py-1 bg-slate-900 rounded border border-slate-400"
                      >
                        {genre.name}
                      </li>
                    ))
                  ) : (
                    <li>No genres available</li>
                  )}
                </ul>
              </div>
              <div className="md:flex md:justify-between md:items-center">
                <div>
                  <p>Description</p>
                  <p className="text-slate-400 md:w-2/3">
                    {detailMovie.overview}
                  </p>
                </div>
                <div className="px-6 py-3 bg-slate-900 rounded border border-slate-400 w-fit">
                  <p>Length</p>
                  <p className="text-slate-400">{detailMovie.runtime} min</p>
                </div>
              </div>
              <div>
                <p>Production</p>
                <ul className="flex whitespace-nowrap overflow-x-auto items-center gap-4">
                  {detailMovie.production_companies &&
                  detailMovie.production_companies.length > 0 ? (
                    detailMovie.production_companies.map((company) => (
                      <li key={company.id} className="text-sm">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                          alt=""
                          className="w-auto h-10 object-cover "
                          srcset=""
                        />
                        {company.name}
                      </li>
                    ))
                  ) : (
                    <li>No production companies available</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailMovie;
