import { Stack } from "@mui/material";
import { product } from "~/components/data";
import { ProductCard } from "~/components/ProductCard";
import { PageContainer } from "~/containers/PageContainer";
import { HeaderTypography } from "~/components/HeaderTypography";

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
        <HeaderTypography text="ATENDIMENTOS ORACULARES" />
      </Stack>
      <Stack>
        {product.map((product, index) => (
          <PageContainer key={index}>
            <ProductCard
              price={product.price}
              image={product.image}
              product={product.product}
              shortDescription={product.description}
              description={product.description}
            />
          </PageContainer>
        ))}
      </Stack>
    </>
  );
}
