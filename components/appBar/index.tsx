import React from "react";
import { Stack, AppBar, ButtonBase, Typography } from "@mui/material";

export const Appbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack>
          <ButtonBase disableRipple>
            <Typography>Templo de Loki</Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </AppBar>
  );
};
21;
