import React from "react";
import Image from "next/image";
import router from "next/router";
import {
  Stack,
  AppBar,
  ButtonBase,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { PageDrawer } from "../Drawer";
import { useIsMobile } from "@/theme/isMobile";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const PageBar = () => {
  const isMobile = useIsMobile();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const leftMenuItems = [
    { label: "SOBRE", path: "/sobre" },
    { label: "ROKKATRU", path: "/rokkatru" },
    { label: "EBOOK", path: "/ebook" },
  ];

  const rightMenuItems = [
    { label: "ATENDIMENTO", path: "/atendimento" },
    { label: "CONTATO", path: "/contato" },
    { label: "PESQUISA", path: "/pesquisa" },
  ];

  const handleButtonClick = (path: string) => {
    handleCloseDrawer();
    router.push(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        padding: theme.spacing(1),
        zIndex: theme.zIndex.drawer + 1, // check
        backgroundColor: theme.palette.background.default,
      })}
    >
      {isMobile ? (
        <>
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ButtonBase
              disableRipple
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                width={95}
                height={60}
              />
            </ButtonBase>
            <IconButton color="inherit" onClick={handleOpenDrawer}>
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Stack>
          <PageDrawer open={isDrawerOpen} onClose={handleCloseDrawer}>
            {leftMenuItems.concat(rightMenuItems).map((link, index) => (
              <Stack key={index} padding={2}>
                <ButtonBase
                  key={link.label}
                  disableRipple
                  onClick={() => handleButtonClick(link.path)}
                >
                  <Typography fontWeight="bold">{link.label}</Typography>
                </ButtonBase>
              </Stack>
            ))}
          </PageDrawer>
        </>
      ) : (
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            {leftMenuItems.map((link) => (
              <ButtonBase
                key={link.label}
                disableRipple
                onClick={() => handleButtonClick(link.path)}
              >
                <Typography>{link.label}</Typography>
              </ButtonBase>
            ))}
            <ButtonBase
              disableRipple
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                width={150}
                height={65}
              />
            </ButtonBase>
            {rightMenuItems.map((link) => (
              <ButtonBase
                key={link.label}
                disableRipple
                onClick={() => handleButtonClick(link.path)}
              >
                <Typography>{link.label}</Typography>
              </ButtonBase>
            ))}
          </Stack>
        </Container>
      )}
    </AppBar>
  );
};

export default PageBar;
