import React from "react";
import { Stack, AppBar, ButtonBase, Typography } from "@mui/material";

const PageBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        padding: theme.spacing(1),
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      })}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <ButtonBase disableRipple>
          <Typography variant="h5" color="white">
            Templo de Loki
          </Typography>
        </ButtonBase>
      </Stack>
    </AppBar>
  );
};

export default PageBar;
