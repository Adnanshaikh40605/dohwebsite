// components/StarRating.tsx
import { Rating } from "@mui/material";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
  return (
    <div className="star-rating">
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(_, newRating) => {
          if (newRating !== null) {
            onChange(newRating);
          }
        }}
        precision={1} // Optional: this allows half-star ratings
        size="large" // Optional: you can adjust the size here
        sx={{ color: "#FFD700", fontSize: "2.2rem" }} // Customize the color of the stars
      />
    </div>
  );
};

export default StarRating;
