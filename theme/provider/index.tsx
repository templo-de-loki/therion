import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";

import { theme } from "..";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
