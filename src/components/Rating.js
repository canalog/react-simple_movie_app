import StarRatings from "react-star-ratings";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
  return (
    <div className={styles.rating__container}>
      (
      <div className={styles.star}>
        <StarRatings
          rating={rating * 0.5}
          starRatedColor="white"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starEmptyColor="grey"
          starSpacing="2px"
        />
      </div>
      <span>{rating}</span>)
    </div>
  );
};

export default Rating;
