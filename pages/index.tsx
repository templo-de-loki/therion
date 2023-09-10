import { NextPage } from "next";
import { Stack } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import MediaCard from "@/components/MediaCard";
import { PageContainer } from "@/components/Page/Container";

const MainPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <MediaCard />
          <MediaCard />
        </Stack>
      </PageContainer>
    </PageWrapper>
  );
};

export default MainPage;
