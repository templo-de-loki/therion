import React from "react";
import { Container, Stack } from "@mui/material";
import Background from "@/components/Page/Gradient";

export interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: React.PropsWithChildren<PageWrapperProps>) => {
  return (
    <>
      <Stack flexGrow={1}>
        <Container maxWidth="xl">
          <Stack
            boxShadow={1}
            borderRadius={1}
            overflow="hidden"
            justifyContent="center"
            sx={(theme) => ({
              padding: theme.spacing(4),
              marginTop: theme.spacing(6),
              minHeight: theme.spacing(10),
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            })}
          >
            {children}
          </Stack>
        </Container>
        <Background />
      </Stack>
    </>
  );
};
