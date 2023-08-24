import React from "react";
import { Container, Stack } from "@mui/material";

export interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: React.PropsWithChildren<PageWrapperProps>) => {
  return (
    <Stack
      flexGrow={1}
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.dark,
      })}
    >
      <Container maxWidth="xl">
        <Stack
          boxShadow={1}
          borderRadius={1}
          overflow="hidden"
          justifyContent="center"
          sx={(theme) => ({
            marginTop: theme.spacing(5),
            minHeight: theme.spacing(10),
            backgroundColor: theme.palette.primary.main,
          })}
        >
          {children}
        </Stack>
      </Container>
    </Stack>
  );
};
