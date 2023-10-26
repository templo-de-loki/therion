import Stack from "@mui/material/Stack";
import PageBar from "../Bar";

export const RootContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      pt={10}
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <PageBar />
      {children}
    </Stack>
  );
};
