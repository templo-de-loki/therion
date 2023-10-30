import { Typography } from "@mui/material";

export const HeaderTypography = ({ text }: { text: string }) => {
  return (
    <Typography variant="h5" fontWeight="bold" align="center" pt={4}>
      {text}
    </Typography>
  );
};
