import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Genre.module.css";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

const pageList = [...Array(10).keys()].map((i) => i + 1);

const Genre = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { genre, page } = useParams();
  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${genre}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }, [genre, page]);

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [getMovies]);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.genre_movie}>
          <h1 className={styles.genre__title}>
            <Link to={`/${genre}/1`}>{genre.slice(6)}</Link>
          </h1>
          <div className={styles.movies}>
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
      <ul className={styles.page_num}>
        {loading
          ? null
          : pageList.map((num) => {
              // <li key={num}>
              //   <Link to={`/${genre}/${num}`}> {num}</Link>
              // </li>
              return (
                <li
                  key={num}
                  className={num === parseInt(page) ? styles.current : null}
                >
                  <Link to={`/${genre}/${num}`}> {num}</Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Genre;
