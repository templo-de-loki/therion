import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";

const RokkatruPage: NextPage = () => {
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
          ROKKATRU
        </Typography>
      </Stack>
      <PageContainer>
        <Typography paragraph>
          O Rokkatru como uma forma específica de espiritualidade nórdica
          contemporânea começou a se desenvolver na década de 1990. Foi
          influenciado pelo ressurgimento do neopaganismo nórdico e pelo
          interesse renovado na mitologia nórdica e nas tradições espirituais
          escandinavas.
        </Typography>
        <Typography paragraph>
          Rokkatru como uma forma específica de espiritualidade nórdica
          contemporânea começou a se desenvolver na década de 1990. Foi
          influenciado pelo ressurgimento do neopaganismo nórdico e pelo
          interesse renovado na mitologia nórdica e nas tradições espirituais
          escandinavas.
        </Typography>
        <Typography paragraph>
          Rokkatru é um termo que se refere a uma forma de espiritualidade
          nórdica contemporânea, na qual os praticantes reverenciam os deuses e
          seres associados ao panteão nórdico chamado &quot;Rökkr&quot;.
        </Typography>
        <Typography paragraph>
          O termo &quot;Rökkr&quot; deriva do nórdico antigo e pode ser
          traduzido como &quot;crepúsculo&quot; ou &quot;forças sombrias&quot;.
          No contexto de Rokkatru, os Rökkr são deuses e espíritos que
          geralmente são considerados mais obscuros ou associados à escuridão, à
          destruição e ao caos, em contraste com os deuses mais conhecidos do
          panteão nórdico, como Odin, Thor e Freya.
        </Typography>
        <Typography paragraph>
          Os praticantes de Rokkatru acreditam que os Rökkr possuem uma
          sabedoria profunda e uma influência significativa no mundo. Eles veem
          o equilíbrio entre as forças da luz e das trevas como essencial para
          uma compreensão completa do cosmos e buscam uma conexão com os deuses
          e seres Rökkr por meio de rituais, orações e práticas espirituais.
        </Typography>
        <Typography variant="h6" fontWeight="bold" paragraph>
          Principais Divindades Rokk
        </Typography>
        <Stack
          padding={2}
          sx={(theme) => ({
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.default,
          })}
        >
          <ul>
            <li>
              <b>Loki</b> O propagador do caos{" "}
            </li>
            <li>
              <b>Sigyn</b> A vitoriosa
            </li>
            <li>
              <b>Angrboda</b> A mãe dos Rokkatru
            </li>
            <li>
              <b>Fenrir</b> O lobo da vingança{" "}
            </li>
            <li>
              <b>Jormungandr</b> Serpente alada
            </li>
            <li>
              <b>Hela</b> Deusa dos mortos{" "}
            </li>
            <li>
              <b>Surt</b> O fogo da Mudança{" "}
            </li>
            <li>
              <b>Surt</b> O fogo da Mudança{" "}
            </li>
            Entre outras:{" "}
            <b>
              Rán, Skadi, Fafnir, Nidhogg, Ymir, Gullveig, Skrymir, Skoll e
              Hati.
            </b>
          </ul>
        </Stack>
      </PageContainer>
    </PageWrapper>
  );
};

export default RokkatruPage;
