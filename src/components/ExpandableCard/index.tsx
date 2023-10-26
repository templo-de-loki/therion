"use client";

import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
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
        <Button variant="outlined" fullWidth color="info">
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
