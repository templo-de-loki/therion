import Image from "next/image";
import { Container, Stack } from "@mui/material";

export interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: React.PropsWithChildren<PageWrapperProps>) => {
  return (
    <>
      <Stack flexGrow={1}>
        <Container maxWidth="lg">
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
            {children}
          </Stack>
        </Container>
      </Stack>

      <Image
        src="/background.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{
          zIndex: -1,
          filter: "blur(5px)",
          opacity: 1,
        }}
      />
    </>
  );
};
