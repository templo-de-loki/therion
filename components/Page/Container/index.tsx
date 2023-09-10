import { Container, Stack } from "@mui/material";

export const PageContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack flexGrow={1}>
      <Stack
        boxShadow={1}
        borderRadius={1}
        overflow="hidden"
        justifyContent="center"
        sx={(theme) => ({
          padding: theme.spacing(4),
          marginTop: theme.spacing(6),
          minHeight: theme.spacing(10),
          backgroundColor: theme.palette.background.default,
        })}
      >
        <Container maxWidth="lg">{children}</Container>
      </Stack>
    </Stack>
  );
};
