/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";
import { HeaderTypography } from "~/components/HeaderTypography";
import { BlogItem } from "~/components/BlogItem";
import { blog } from "~/components/data";

export default function RökkatruPage() {
  return (
    <>
      <HeaderTypography text="RÖKKATRU" />
      <PageContainer>
        <Typography paragraph>
          Rokkatru é um termo que se refere a uma forma de espiritualidade
          nórdica contemporânea, na qual os praticantes reverenciam os deuses e
          seres associados ao panteão nórdico chamado &quot;Rökkr&quot;.
        </Typography>
        <Typography paragraph>
          O termo &quot;Rökkr&quot; deriva do nórdico antigo e pode ser
          traduzido como &quot;crepúsculo&quot; ou &quot;forças sombrias&quot;.
        </Typography>
        <Typography paragraph>
          Os praticantes de Rokkatru acreditam que os Rökkr possuem uma
          sabedoria profunda e uma influência significativa no mundo. Eles veem
          o equilíbrio entre as forças da luz e das trevas como essencial para
          uma compreensão completa do cosmos e buscam uma conexão com os deuses
          e seres Rökkr por meio de rituais, orações e práticas espirituais.
        </Typography>
        <Typography paragraph>
          Embora seja difícil rastrear um momento exato de sua origem, o termo
          &quot;Rokkatru&quot; começou a ser usado e popularizado no final dos
          anos 1990 e início dos anos 2000 por pessoas que se identificavam com
          uma abordagem espiritual centrada nos deuses e seres Rökkr.
        </Typography>
        <Typography paragraph>
          Desde então, a comunidade Rokkatru tem crescido e se diversificado,
          com praticantes ao redor do mundo explorando essa forma de
          espiritualidade e compartilhando suas experiências e conhecimentos. É
          importante notar que, como uma prática espiritual moderna, o Rokkatru
          continua a evoluir e se adaptar às experiências individuais e
          coletivas de seus praticantes.
        </Typography>
      </PageContainer>
      <HeaderTypography text="PRINCIPAIS DIVINDADES ROKK" />
      <PageContainer>
        {blog.map((blog, index) => (
          <BlogItem
            key={index}
            image={blog.image}
            title={blog.title}
            text={blog.text}
          />
        ))}
      </PageContainer>
    </>
  );
}
