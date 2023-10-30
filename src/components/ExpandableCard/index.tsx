import React from "react";
import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ExpandableCardProps {
  product: string;
  price: string;
  image: string;
  description: string;
  extraDescription: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ExpandableCard = ({
  product,
  price,
  image,
  description,
  extraDescription,
}: ExpandableCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Stack padding={1} direction="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          {product}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {price}
        </Typography>
      </Stack>
      <CardMedia component="img" height="170" image={image} />
      <Stack padding={1}>
        <Typography variant="body2">{description}</Typography>
      </Stack>
      <Stack direction="row" padding={1}>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={handleBuyClick}
        >
          Comprar
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          sx={(theme) => ({ color: theme.palette.common.white })}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack padding={1}>
          <Typography variant="body2" paragraph>
            {extraDescription}
          </Typography>
        </Stack>
      </Collapse>
    </Card>
  );
};
