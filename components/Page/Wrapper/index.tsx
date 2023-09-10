import Image from "next/image";
import { Stack } from "@mui/material";

export const PageWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Stack flexGrow={1}>{children}</Stack>

      <Image
        src="/background.svg"
        alt="Background Image"
        objectFit="cover"
        layout="fill"
        style={{
          zIndex: -1,
        }}
      />
    </>
  );
};
