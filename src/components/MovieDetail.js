import styles from "./MovieDetail.module.css";

const MovieDetail = ({
  medium_cover_image,
  title,
  year,
  runtime,
  language,
  rating,
  genres,
  description,
}) => {
  return (
    <div className={styles.movie}>
      <img
        className={styles.cover_image}
        src={medium_cover_image}
        alt={title}
      />
      <div className={styles.movie__details}>
        <div className={styles.movie__index}>
          <div className={styles.movie__info}>
            <h1 className={styles.movie__title}>{title}</h1>
            <ul className={styles.movie__more}>
              <li>{year}</li>
              <li>
                {parseInt(runtime / 60) > 0
                  ? `${parseInt(runtime / 60)}h `
                  : null}
                {runtime % 60}m
              </li>
              <li>{language.toUpperCase()}</li>
            </ul>
            <h4 className={styles.movie__genres}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </h4>
          </div>
          <h3 className={styles.movie__rating}>
            {rating}
            <span>/10</span>
          </h3>
        </div>
        <div className={styles.movie__description}>{description}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
