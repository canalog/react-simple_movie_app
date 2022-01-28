import { useEffect, useState } from "react";
import styles from "./Home.module.css";

import Movie from "../components/Movie";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [transform, setTransform] = useState(0);

  const onLeftClick = () => {
    if (transform >= 0) {
      return;
    }
    setTransform((current) => current + 296);
  };
  const onRightClick = () => {
    if (transform <= -2072) {
      return;
    }
    setTransform((current) => current - 296);
  };
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.slider}>
          <div
            className={styles.movies}
            style={{
              transform: `translateX(${transform}px)`,
            }}
          >
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
                summary={movie.summary}
              />
            ))}
          </div>
        </div>
      )}
      {loading ? null : (
        <div>
          <button className={styles.slider__left} onClick={onLeftClick}>
            <i class="fas fa-caret-left"></i>
          </button>
          <button className={styles.slider__right} onClick={onRightClick}>
            <i class="fas fa-caret-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
