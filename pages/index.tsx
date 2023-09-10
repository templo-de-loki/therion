/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import MediaCard from "@/components/MediaCard";

const DashboardPage: NextPage = () => {
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

export default DashboardPage;
