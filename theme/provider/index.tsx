import React from "react";
import { theme } from "..";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
