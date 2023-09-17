import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";

const RokkatruPage: NextPage = () => {
  return (
    <PageWrapper>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h4">ROKKATRU</Typography>
      </Stack>

      <Stack>
        <PageContainer></PageContainer>
      </Stack>
    </PageWrapper>
  );
};

export default RokkatruPage;
