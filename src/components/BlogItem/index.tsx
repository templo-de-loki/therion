/* eslint-disable @next/next/no-img-element */
import { Grid, MenuItem, MenuList, Stack, Typography } from "@mui/material";
import { useIsMobile } from "~/theme/useIsMobile";

interface BlogItemProps {
  text: string;
  image: string;
  title: string;
}

export const BlogItem = ({ text, image, title }: BlogItemProps) => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <Grid container direction="row">
          <Grid item md={4}>
            <MenuList>
              <MenuItem>
                <Typography>Test</Typography>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item md={8}>
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
          </Grid>
        </Grid>
      ) : (
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
      )}
    </>
  );
};
