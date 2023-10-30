import { Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";

export default function RökkatruPage() {
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
          RÖKKATRU
        </Typography>
      </Stack>
      <PageContainer>
        <Typography paragraph>
          O Rökkatru como uma forma específica de espiritualidade nórdica
          contemporânea começou a se desenvolver na década de 1990. Foi
          influenciado pelo ressurgimento do neopaganismo nórdico e pelo
          interesse renovado na mitologia nórdica e nas tradições espirituais
          escandinavas.
        </Typography>
        <Typography paragraph>
          Rökkatru como uma forma específica de espiritualidade nórdica
          contemporânea começou a se desenvolver na década de 1990. Foi
          influenciado pelo ressurgimento do neopaganismo nórdico e pelo
          interesse renovado na mitologia nórdica e nas tradições espirituais
          escandinavas.
        </Typography>
        <Typography paragraph>
          Rökkatru é um termo que se refere a uma forma de espiritualidade
          nórdica contemporânea, na qual os praticantes reverenciam os deuses e
          seres associados ao panteão nórdico chamado &quot;Rökkr&quot;.
        </Typography>
        <Typography paragraph>
          O termo &quot;Rökkr&quot; deriva do nórdico antigo e pode ser
          traduzido como &quot;crepúsculo&quot; ou &quot;forças sombrias&quot;.
          No contexto de Rökkatru, os Rökkr são deuses e espíritos que
          geralmente são considerados mais obscuros ou associados à escuridão, à
          destruição e ao caos, em contraste com os deuses mais conhecidos do
          panteão nórdico, como Odin, Thor e Freya.
        </Typography>
        <Typography paragraph>
          Os praticantes de Rökkatru acreditam que os Rökkr possuem uma
          sabedoria profunda e uma influência significativa no mundo. Eles veem
          o equilíbrio entre as forças da luz e das trevas como essencial para
          uma compreensão completa do cosmos e buscam uma conexão com os deuses
          e seres Rökkr por meio de rituais, orações e práticas espirituais.
        </Typography>
      </PageContainer>
      <Typography variant="h5" fontWeight="bold" align="center">
        PRINCIPAIS DIVINDADES ROKK
      </Typography>
      <PageContainer>
        <ul>
          <li>
            <b>Loki</b> O propagador do caos{" "}
          </li>
          <li>
            <b>Sigyn</b> A vitoriosa
          </li>
          <li>
            <b>Angrboda</b> A mãe dos Rökkatru
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
            Rán, Skadi, Fafnir, Nidhogg, Ymir, Gullveig, Skrymir, Skoll e Hati.
          </b>
        </ul>
      </PageContainer>
    </>
  );
}
