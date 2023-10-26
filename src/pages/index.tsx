import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "~/containers/PageWrapper";
import { PageContainer } from "~/containers/PageContainer";

export default function Home() {
  return (
    <PageWrapper>
      <Stack
        justifyContent="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h4" fontWeight="bold">
          Gosto de Pão
        </Typography>
      </Stack>
      <Stack>
        <PageContainer></PageContainer>
      </Stack>
    </PageWrapper>
  );
}
