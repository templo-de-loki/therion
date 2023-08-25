/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";

const DashboardPage: NextPage = () => {
  return (
    <PageWrapper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img
          src="https://i.pinimg.com/originals/78/a7/f5/78a7f5e0bd41db21ec8cf85fcc6102cd.gif"
          alt="Loki"
        />
      </Stack>
    </PageWrapper>
  );
};

export default DashboardPage;
