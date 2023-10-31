/* eslint-disable @next/next/no-img-element */
import PageBar from "../AppBar";
import Image from "next/image";
import { Stack } from "@mui/material";
import Footer from "../Footer";

export const RootContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack pt={8}>
      <PageBar />
      {children}
      <Stack
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Image
          src="/background.svg"
          alt="Background Image"
          fill={true}
          priority={true}
          style={{
            objectFit: "cover",
          }}
        />
      </Stack>
      <Footer />
    </Stack>
  );
};
