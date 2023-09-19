import React from "react";
import { Alert, AlertColor } from "@mui/material";
import { Snackbar as MuiSnackbar, Slide, Stack } from "@mui/material";

interface SnackbarProps {
  isSnackbarOpen: boolean;
  closeSnackbar: () => void;
  severity: "success" | "info" | "warning" | "error";
  content: string;
}

export const Snackbar = ({
  isSnackbarOpen,
  closeSnackbar,
  severity,
  content,
}: SnackbarProps) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeSnackbar();
  };

  return (
    <MuiSnackbar
      open={isSnackbarOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <Alert onClose={handleClose} severity={severity as AlertColor}>
        <Stack>{content}</Stack>
      </Alert>
    </MuiSnackbar>
  );
};
