import { Stack } from "@mui/material";
import { product } from "~/components/data";
import { ProductCard } from "~/components/ProductCard";
import { PageContainer } from "~/containers/PageContainer";
import { HeaderTypography } from "~/components/HeaderTypography";

export default function ServicesPage() {
  return (
    <>
      <HeaderTypography text="ATENDIMENTOS ORACULARES" />
      <Stack>
        {product.map((product, index) => (
          <PageContainer key={index}>
            <ProductCard
              price={product.price}
              image={product.image}
              product={product.product}
              shortDescription={product.shortDescription}
              description={product.description}
            />
          </PageContainer>
        ))}
      </Stack>
    </>
  );
}
