import React from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import { Appbar } from "../appBar";

export const RootContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      pt={8}
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Appbar />
      {children}
    </Stack>
  );
};
