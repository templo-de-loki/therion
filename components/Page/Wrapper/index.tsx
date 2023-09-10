import Image from "next/image";
import { Container, Stack } from "@mui/material";

export interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: React.PropsWithChildren<PageWrapperProps>) => {
  return (
    <>
      <Stack flexGrow={1}>
        <Stack
          boxShadow={1}
          borderRadius={1}
          overflow="hidden"
          justifyContent="center"
          sx={(theme) => ({
            padding: theme.spacing(4),
            marginTop: theme.spacing(6),
            minHeight: theme.spacing(10),
            backgroundColor: theme.palette.background.default,
          })}
        >
          <Container maxWidth="lg">{children}</Container>
        </Stack>
      </Stack>

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
