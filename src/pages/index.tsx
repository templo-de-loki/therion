import { Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";

export default function Home() {
  return (
    <>
      <Stack
        justifyContent="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h5" fontWeight="bold" fontWeight="bold">
          Gosto de Pão
        </Typography>
      </Stack>
      <Stack>
        <PageContainer></PageContainer>
      </Stack>
    </>
  );
}
