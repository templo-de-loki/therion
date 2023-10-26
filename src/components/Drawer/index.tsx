import React from "react";
import { Drawer, Stack } from "@mui/material";

export interface PageDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PageDrawer: React.FC<PageDrawerProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Stack>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={(theme) => ({
          padding: theme.spacing(1),
          ".MuiDrawer-paper": {
            backgroundColor: theme.palette.background.default,
          },
        })}
      >
        {children}
      </Drawer>
    </Stack>
  );
};
