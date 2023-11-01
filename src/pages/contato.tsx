import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";
import { HeaderTypography } from "~/components/HeaderTypography";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactPage() {
  return (
    <>
      <HeaderTypography text="CONTATO" />
      <PageContainer>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary.light"
          align="center"
          paragraph
        >
          Templo de Loki
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Link
              href="mailto:templo.loki@gmail.com"
              underline="hover"
              color="white"
            >
              templo.loki@gmail.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <WhatsAppIcon fontSize="small" />
            <Link
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5521969714712"
              underline="hover"
              target="_blank"
              color="white"
            >
              (21) 96971-4712
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <InstagramIcon fontSize="small" />
            <Link
              href="https://www.instagram.com/templo_de_loki/"
              underline="hover"
              target="_blank"
              color="white"
            >
              templo_de_loki
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon fontSize="small" />
            <Link
              href="https://github.com/templo-de-loki"
              underline="hover"
              target="_blank"
              color="white"
            >
              templo-de-loki
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <TelegramIcon fontSize="small" />
            <Link
              href="https://t.me/Caim17"
              underline="hover"
              target="_blank"
              color="white"
            >
              @Caim17
            </Link>
          </Stack>
        </Stack>
      </PageContainer>
    </>
  );
}
