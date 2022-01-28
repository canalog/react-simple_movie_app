import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img
            src={details.data.movie.medium_cover_image}
            alt={details.data.movie.title}
          />
          <h1>{details.data.movie.title_long}</h1>
          <h3>Runtime : {details.data.movie.runtime}m</h3>
          <h3>Rating : {details.data.movie.rating}</h3>
          <h4>
            Genres :{" "}
            {details.data.movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </h4>
          <div>{details.data.movie.description_intro}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
