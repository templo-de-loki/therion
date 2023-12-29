/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useIsMobile } from "~/theme/useIsMobile";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { Button, Grid, Stack, Tooltip } from "@mui/material";

interface ExpandableCardProps {
  product: string;
  price: string;
  image: string;
  description: string;
  shortDescription: string;
}

export const ProductCard = ({
  product,
  price,
  image,
  description,
  shortDescription,
}: ExpandableCardProps) => {
  const isMobile = useIsMobile();
  const message = encodeURIComponent(
    `Olá e seja bem-vindo ao Atendimento Templo de Loki.\nVocê solicitou o ${product} no valor de ${price}. Nossos sacerdotes entrarão em contato com você assim que receberem esta mensagem.`
  );
  const handleBuyClick = () => {
    window.open(
      `https://api.whatsapp.com/send?1=pt_BR&phone=5521969714712&text=${message}`,
      "_blank"
    );
  };
  return (
    <Grid container direction="row" spacing={2} alignItems="center">
      <Grid item md={6}>
        <img
          src={image}
          alt={product}
          width="100%"
          style={{ borderRadius: 10, opacity: 0.8 }}
        />
      </Grid>
      <Grid item md={6} direction="row" spacing={2}>
        <Stack
          direction={{ md: "row", sm: "column" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          pb={2}
        >
          <Tooltip title="Delete">
            <Typography variant="h5" fontWeight="bold" align="center">
              {product}
            </Typography>
          </Tooltip>
        </Stack>
        <Typography paragraph>{shortDescription}</Typography>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={handleBuyClick}
          >
            Quero saber mais!
          </Button>
          {!isMobile && (
            <Tooltip title={description} enterDelay={100} leaveDelay={200}>
              <Button color="secondary" variant="outlined">
                <InfoIcon />
              </Button>
            </Tooltip>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
