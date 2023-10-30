import StarIcon from "@mui/icons-material/Star";
import { Rating, Stack, Typography } from "@mui/material";

interface ReviewProps {
  rating: number;
  review: string;
}

export const Review = ({ rating, review }: ReviewProps) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Rating
        value={rating}
        readOnly
        icon={
          <StarIcon
            sx={(theme) => ({
              color: theme.palette.primary.light,
            })}
            fontSize="inherit"
          />
        }
        emptyIcon={
          <StarIcon
            sx={(theme) => ({
              opacity: 0.5,
              color: theme.palette.primary.main,
            })}
            fontSize="inherit"
          />
        }
      />
      <Typography align="center">{review}</Typography>
    </Stack>
  );
};
