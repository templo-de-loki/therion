import React from "react";
import Image from "next/image";
import { Snackbar } from "~/components/Snackbar";
import { Button, Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";
import { HeaderTypography } from "~/components/HeaderTypography";

export default function EbookPage() {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
  const handleOpenSnackbar = () => {
    setIsSnackbarOpen(true);
  };
  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <>
      <HeaderTypography text="EBOOK" />
      <PageContainer>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "stretch" }}
          spacing={1}
        >
          <Image
            src="/book.svg"
            alt="Picture of the author"
            width={282}
            height={419}
            priority={true}
            style={{ borderRadius: "8px" }}
          />
          <Stack
            padding={2}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
            })}
          >
            <Stack>
              <Typography variant="h5" fontWeight="bold" paragraph>
                Rökkatru: Guia para te auxiliar nas práticas rokkatru
              </Typography>
              <Typography gutterBottom>
                Esse ebook foi criado com o intuito de auxiliar você, jovem
                magista que se sente perdido dentro do paganismo nórdico, ou que
                já possui interesse nas práticas ocultas do meio e quer conhecer
                mais sobre as práticas e ensinamentos rokkatru.
              </Typography>
              <Typography gutterBottom>
                Nesse ebook trarei técnicas, conhecimentos e reflexões sobre o
                lado oculto do paganismo nórdico
              </Typography>
              <Typography>
                Rokkatru é uma vertente do paganismo nórdico que presta
                homenagem aos deuses e espíritos do Rokkr, ou Jotnar, os
                gigantes do panteão nórdico. Este livro é um guia para a
                história e prática da Rõkkatru, e inclui um guia sobre os deuses
                e espíritos do Rokkr, um guia sobre os feriados e um guia sobre
                a prática da Rõkkatru.
              </Typography>
            </Stack>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={handleOpenSnackbar}
            >
              Baixar Ebook
            </Button>
          </Stack>
        </Stack>
      </PageContainer>
      <Snackbar
        content="Ebook ainda não disponível"
        closeSnackbar={handleCloseSnackbar}
        isSnackbarOpen={isSnackbarOpen}
        severity="info"
      />
    </>
  );
}
