/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from "@mui/material";

interface BlogItemProps {
  text: string;
  image: string;
  title: string;
}

export const BlogItem = ({ text, image, title }: BlogItemProps) => {
  return (
    <Stack pb={6}>
      <img
        src={image}
        alt="Image of the blog post"
        width="100%"
        height={170}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <Typography>
        <b>{title}</b> {text}
      </Typography>
    </Stack>
  );
};
