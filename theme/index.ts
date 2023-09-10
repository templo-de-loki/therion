import { palette } from "./palette";
import { createTheme, PaletteOptions } from "@mui/material";

export const theme = createTheme({
  palette: palette as PaletteOptions,
  shape: { borderRadius: 2 },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 16,
  },
});

export { palette };
