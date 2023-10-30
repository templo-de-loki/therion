import { product } from "~/components/data";
import { Grid, Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";
import { ExpandableCard } from "~/components/ExpandableCard";

export default function ServicesPage() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h5" fontWeight="bold">
          ATENDIMENTOS ORACULARES
        </Typography>
      </Stack>
      <Stack>
        <PageContainer>
          <Grid container spacing={2}>
            {product.map((product, index) => (
              <Grid item container key={index} xs={12} md={6}>
                <ExpandableCard
                  key={index}
                  price={product.price}
                  image={product.image}
                  product={product.product}
                  description={product.description}
                  extraDescription={product.extraDescription}
                />
              </Grid>
            ))}
          </Grid>
        </PageContainer>
      </Stack>
    </>
  );
}
