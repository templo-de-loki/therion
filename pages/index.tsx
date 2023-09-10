import { NextPage } from "next";
import { Stack } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import MediaCard from "@/components/MediaCard";

const MainPage: NextPage = () => {
  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <MediaCard />
        <MediaCard />
      </Stack>
    </PageWrapper>
  );
};

export default MainPage;
