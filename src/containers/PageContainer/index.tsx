import { Container, Stack } from "@mui/material";

export const PageContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Container maxWidth="lg">
      <Stack
        flexGrow={1}
        boxShadow={4}
        sx={(theme) => ({
          padding: theme.spacing(4),
          margin: `${theme.spacing(2)} auto`,
          minHeight: theme.spacing(10),
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.default,
        })}
      >
        {children}
      </Stack>
    </Container>
  );
};
