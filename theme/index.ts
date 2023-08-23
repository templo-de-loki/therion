import { createTheme, PaletteOptions } from "@mui/material";
import { palette } from "./palette";

export const theme = createTheme({
  palette: palette as PaletteOptions,
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: ["Georgia", "serif"].join(","),
    fontSize: 16,
  },
});

export { palette };
