import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import Rating from "./Rating";

const Movie = ({ id, coverImg, title, year, rating, genres, summary }) => {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__image} />
      <div className={styles.movie__details}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.movie__numbers}>
          <h3 className={styles.movie__year}>{year}</h3>
          <Rating rating={rating} />
        </div>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <p className={styles.movie__summary}>
          {summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
