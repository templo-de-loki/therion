/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

interface ExpandableCardProps {
  product: string;
  price: string;
  image: string;
  description: string;
}

export const ProductCard = ({
  product,
  price,
  image,
  description,
}: ExpandableCardProps) => {
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
    <Grid container direction="row" spacing={2} py={2}>
      <Grid item md={6}>
        <img src={image} alt={product} width="100%" />
      </Grid>
      <Grid item md={6} direction="row" spacing={2}>
        <Stack justifyContent="center" alignItems="left">
          <Typography variant="h5" fontWeight="bold">
            {product}
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="secondary">
            {price}
          </Typography>
          <Typography paragraph>{description}</Typography>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={handleBuyClick}
          >
            Comprar
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
