/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from "@mui/material";

interface BlogItemProps {
  text: string;
  image: string;
  title: string;
}

export const BlogItem = ({ text, image, title }: BlogItemProps) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} pb={4} spacing={6}>
      <img
        src={image}
        alt="Image of the blog post"
        height={170}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h10">{text}</Typography>
      </Typography>
    </Stack>
  );
};
