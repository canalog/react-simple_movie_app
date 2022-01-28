import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

import MovieDetail from "../components/MovieDetail";
import Loader from "../components/Loader";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  });
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <MovieDetail
          medium_cover_image={details.medium_cover_image}
          title={details.title}
          year={details.year}
          runtime={details.runtime}
          language={details.language}
          rating={details.rating}
          genres={details.genres}
          description={details.description_intro}
        />
      )}
    </div>
  );
};

export default Detail;
