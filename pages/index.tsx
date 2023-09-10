import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";
import { ContentCard } from "@/components/Card";

const MainPage: NextPage = () => {
  return (
    <PageWrapper>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h4">SOBRE NÓS</Typography>
      </Stack>

      <Stack>
        <PageContainer>
          <Stack
            justifyContent="center"
            direction="column"
            alignItems="left"
            spacing={2}
          >
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
        </PageContainer>

        <PageContainer>
          <Stack
            justifyContent="center"
            direction="column"
            alignItems="left"
            spacing={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Loki
            </Typography>
            <Typography>
              Na vertente rokkatru, Loki é visto como uma figura ambivalente que
              representa tanto o caos e a travessura quanto a inovação, a
              transformação e a subversão das normas.
            </Typography>
            <Typography>
              Ele desafia as estruturas divinas, incentivando a busca pela
              verdade pessoal e convidando-nos a abraçar a complexidade do
              divino, em vez de ser simplesmente considerado um vilão.
            </Typography>
          </Stack>
        </PageContainer>

        <Stack
          justifyContent="center"
          alignItems="center"
          margin={6}
          spacing={2}
        >
          <Stack>
            <Typography variant="h4">POR TRAS DO TEMPLO DE LOKI</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              fames ut.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <ContentCard
              title="Caio dos Santos"
              content="Desde os 16 anos, meu chamado pessoal começou quando comecei a ouvir histórias sobre os Deuses e sonhava em fazer parte desse mundo se eles fossem reais."
            />
            <ContentCard
              title="Caio dos Santos"
              content="Desde os 16 anos, meu chamado pessoal começou quando comecei a ouvir histórias sobre os Deuses e sonhava em fazer parte desse mundo se eles fossem reais."
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
            <Typography variant="h4">AVALIAÇÕES</Typography>
            <Typography>
              Na vertente rokkatru, Loki é visto como uma figura ambivalente que
              representa tanto o caos e a travessura quanto a inovação, a
              transformação e a subversão das normas.
            </Typography>
            <Typography>
              Ele desafia as estruturas divinas, incentivando a busca pela
              verdade pessoal e convidando-nos a abraçar a complexidade do
              divino, em vez de ser simplesmente considerado um vilão.
            </Typography>
          </Stack>
        </PageContainer>
      </Stack>
    </PageWrapper>
  );
};

export default MainPage;
