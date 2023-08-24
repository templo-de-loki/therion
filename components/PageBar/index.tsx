import React from "react";
import { Stack, AppBar, ButtonBase, Typography } from "@mui/material";

const PageBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <ButtonBase disableRipple>
          <Typography variant="h6" color="white">
            Templo de Loki
          </Typography>
        </ButtonBase>
      </Stack>
    </AppBar>
  );
};

export default PageBar;
