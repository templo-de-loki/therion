import React from "react";
import Image from "next/image";
import {
  Stack,
  ButtonBase,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { PageDrawer } from "~/components/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useIsMobile } from "~/theme/useIsMobile";

const PageBar = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const menuItems = [
    { label: "SOBRE", path: "/" },
    { label: "RÖKKATRU", path: "/rokkatru" },
    { label: "EBOOK", path: "/ebook" },
    { label: "ATENDIMENTOS", path: "/atendimentos" },
    { label: "CONTATO", path: "/contato" },
    { label: "PESQUISA", path: "/pesquisa" },
  ];

  const handleButtonClick = (path: string) => {
    handleCloseDrawer();
    void router.push(path);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        top: 0,
        zIndex: 1,
        position: "sticky",
      }}
    >
      <Stack
        flexGrow={1}
        boxShadow={4}
        sx={(theme) => ({
          padding: theme.spacing(2),
          margin: `${theme.spacing(1)} auto`,
          borderRadius: theme.shape.borderRadius,
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
                  void router.push("/");
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Picture of the author"
                  width={95}
                  height={60}
                />
              </ButtonBase>
              <IconButton
                color="inherit"
                onClick={isDrawerOpen ? handleCloseDrawer : handleOpenDrawer}
              >
                {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
            <PageDrawer open={isDrawerOpen} onClose={handleCloseDrawer}>
              {menuItems.map((link, index) => (
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <ButtonBase
              disableRipple
              onClick={() => {
                void router.push("/");
              }}
            >
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                width={110}
                height={70}
              />
            </ButtonBase>
            {menuItems.map((link) => (
              <ButtonBase
                key={link.label}
                disableRipple
                onClick={() => handleButtonClick(link.path)}
              >
                <Typography>{link.label}</Typography>
              </ButtonBase>
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default PageBar;
