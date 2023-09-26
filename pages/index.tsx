import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";

const MainPage: NextPage = () => {
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
};

export default MainPage;
