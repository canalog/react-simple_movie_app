import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import genres from "../GenreList";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link to="/">Cana Movie</Link>
      </h1>
      <ul className={styles.genres}>
        {genres.map(({ title, path }) => (
          <li key={title}>
            <Link to={`/${path}/1`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
