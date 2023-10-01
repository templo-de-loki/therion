import { NextPage } from "next";
import { Grid, Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";
import { ExpandableCard } from "@/components/ExpandableCard";
import { product } from "@/components/data";

const ServicesPage: NextPage = () => {
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
    </PageWrapper>
  );
};

export default ServicesPage;
