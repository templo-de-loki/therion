import Image from "next/image";
import router from "next/router";
import {
  Stack,
  AppBar,
  ButtonBase,
  Typography,
  Container,
} from "@mui/material";

const PageBar = () => {
  const leftMenuItems = [
    { label: "SOBRE", path: "/sobre" },
    { label: "ROKKATRU", path: "/rokkatru" },
    { label: "EBOOK", path: "/ebook" },
  ];

  const rightMenuItems = [
    { label: "ATENDIMENTO", path: "/atendimentos" },
    { label: "CONTATO", path: "/contato" },
    { label: "ALGO", path: "/algo" },
  ];

  const handleButtonClick = (path: string) => {
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
    </AppBar>
  );
};

export default PageBar;
