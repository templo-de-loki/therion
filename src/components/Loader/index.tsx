import { CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Stack display="flex" alignItems="center" justifyContent="center">
    <CircularProgress />
  </Stack>
);

export default Loader;
