import StarIcon from "@mui/icons-material/Star";
import { Rating, Stack, Typography } from "@mui/material";

interface ReviewProps {
  rating: number;
  review: string;
}

export const Review = ({ rating, review }: ReviewProps) => {
  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        readOnly
        icon={
          <StarIcon style={{ opacity: 1, color: "white" }} fontSize="inherit" />
        }
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.5, color: "white" }}
            fontSize="inherit"
          />
        }
      />
      <Typography>{review}</Typography>
    </Stack>
  );
};
