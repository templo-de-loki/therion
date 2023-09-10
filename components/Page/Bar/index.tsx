import Image from "next/image";
import { Stack, AppBar, ButtonBase } from "@mui/material";

const PageBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <ButtonBase disableRipple>
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={150}
            height={60}
          />
        </ButtonBase>
      </Stack>
    </AppBar>
  );
};

export default PageBar;
