import { palette } from "./palette";
import { createTheme, type PaletteOptions } from "@mui/material";

export const theme = createTheme({
  palette: palette as PaletteOptions,
  shape: { borderRadius: 3 },
  typography: {
    fontFamily: ["Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontSize: 16,
  },
});

export { palette };
