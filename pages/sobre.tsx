import Image from "next/image";
import { NextPage } from "next";
import { Review } from "@/components/Review";
import { ContentCard } from "@/components/Card";
import { Grid, Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";
import { reviewData } from "@/components/Review/data";

const AboutPage: NextPage = () => {
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
          SOBRE NÓS
        </Typography>
      </Stack>

      <Stack>
        <PageContainer>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Stack justifyContent="center" alignItems="left" spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                Templo de Loki
              </Typography>
              <Typography>
                O <b>Templo</b> foi criado em 2020, com o intuito de auxiliar
                magistas do meio nórdico a aprenderem sobre magia e paganismo de
                uma forma leve e descontraída, sem muitos dogmas ou limitações,
                seguindo a vertente Rokkatru.
              </Typography>
              <Typography>
                Desde sua fundação, o <b>Templo</b> tem crescido e evoluído
                constantemente, ampliando a compreensão da filosofia Rokkr e
                promovendo o autodesenvolvimento de cada magista.
              </Typography>
            </Stack>
            <Image
              src="/temple-image.svg"
              alt="Picture of the author"
              width={250}
              height={250}
            />
          </Stack>
        </PageContainer>

        <PageContainer>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Image
              src="/loki-image.svg"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Stack justifyContent="center" alignItems="left" spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                Loki
              </Typography>
              <Typography>
                Na vertente rokkatru, Loki é visto como uma figura ambivalente
                que representa tanto o caos e a travessura quanto a inovação, a
                transformação e a subversão das normas.
              </Typography>
              <Typography>
                Ele desafia as estruturas divinas, incentivando a busca pela
                verdade pessoal e convidando-nos a abraçar a complexidade do
                divino, em vez de ser simplesmente considerado um vilão.
              </Typography>
            </Stack>
          </Stack>
        </PageContainer>

        <Stack
          justifyContent="center"
          alignItems="center"
          margin={6}
          spacing={2}
        >
          <Stack>
            <Typography variant="h4" fontWeight="bold" align="center">
              POR TRAS DO TEMPLO DE LOKI
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              fames ut.
            </Typography>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={8}>
            <ContentCard
              image="/person-one.svg"
              title="Caim - Sacerdote"
              content="Meu chamado pessoal começou aos 16 anos, desde então tenho estudado, praticado e me aprimorado no contexto nórdico. Atualmente, minha jornada me leva pelo caminho Rokkatru. Com o conhecimento adquirido, dedico-me a ajudar novos praticantes em suas trilhas pessoais."
            />
            <ContentCard
              image="/person-two.svg"
              title="Caio dos Santos"
              content="Tão caótica quanto Rokkr, a equipe do templo de Loki é variada, composta por uma caoísta, um seguidor de Rokkatru e um ateu. Todos unidos pelo objetivo de melhorar e direcionar informações Lokianas para cada um de vocês."
            />
          </Stack>
        </Stack>

        <PageContainer>
          <Stack
            justifyContent="center"
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h4" fontWeight="bold">
              FEEDBACK
            </Typography>
          </Stack>

          <Grid container direction="row" spacing={4} padding={4}>
            {reviewData.map((review, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Review
                  key={index}
                  rating={review.rating}
                  person={review.person}
                  review={review.review}
                />
              </Grid>
            ))}
          </Grid>
        </PageContainer>
      </Stack>
    </PageWrapper>
  );
};

export default AboutPage;
