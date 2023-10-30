import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface ContentCardProps {
  image: string;
  title: string;
  subTitle: string;
  content: string;
}

export const ContentCard = ({
  image,
  title,
  subTitle,
  content,
}: ContentCardProps) => {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 345,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <CardMedia
        image={image}
        sx={{ height: 240 }}
        title="Imagem Equipe Templo"
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="white">
          {title}
        </Typography>
        <Typography
          paragraph
          variant="body2"
          fontWeight="bold"
          color="primary.light"
        >
          {subTitle}
        </Typography>
        <Typography variant="body2" color="white">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
