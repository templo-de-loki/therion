import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import { Button, Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";
import { Snackbar } from "@/components/Snackbar";

const RökkatruPage: NextPage = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const handleOpenSnackbar = () => {
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <PageWrapper>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h4" fontWeight="bold">
          EBOOK
        </Typography>
      </Stack>
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
              <Typography variant="body1">
                &quot;Rökkatru&quot; é uma religião moderna e politeísta que
                presta homenagem aos deuses e espíritos do Rokkr, ou Jotnar, os
                gigantes do panteão nórdico. Este livro é um guia para a
                história e prática da Rökkatru, e inclui um guia sobre os deuses
                e espíritos do Rokkr, um guia sobre os feriados e um guia sobre
                a prática da Rökkatru.
              </Typography>
            </Stack>
            <Button
              fullWidth
              variant="outlined"
              color="info"
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
    </PageWrapper>
  );
};

export default RökkatruPage;
