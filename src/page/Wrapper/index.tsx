import Image from "next/image";
import { Stack } from "@mui/material";

export const PageWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack>
      <Stack flexGrow={1}>{children}</Stack>

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
          layout="fill"
          objectFit="cover"
        />
      </Stack>
    </Stack>
  );
};
