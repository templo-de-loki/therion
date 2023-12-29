import { Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";

interface BlogItemProps {
  text: string;
  image: string;
  title: string;
}

export const BlogItem = ({ text, image, title }: BlogItemProps) => {
  return (
    <PageContainer>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={2}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="Image of the blog post"
          style={{
            maxWidth: 300,
            borderRadius: 10,
          }}
        />
        <Stack>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
