import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import { PageWrapper } from "@/components/Page/Wrapper";
import { PageContainer } from "@/components/Page/Container";

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
          <Typography paragraph>
            <b>Mapa rúnico</b> Uma análise das energias do seu presente, passado
            e futuro, destrinchando as sombras e oportunidades contidas em seu
            campo espiritual, pessoal, amoroso, emocional e financeiro,
            guiando-o através das melhores energias que atuarão no seu
            desenvolvimento pessoal completo. Está totalmente perdido e sem rumo
            e precisa de uma luz sobre como andam suas energias nas principais
            áreas da sua vida? Então esse é o espaço certo para você! Mentoria-
            Jornada guiada através de 4 encontros mensais ao vivo e
            acompanhamento diário, te auxiliando nas suas práticas mágicas e
            contato com os deuses. Através da força das divindades e da sua
            própria energia, montaremos juntos um caminho de maior conectividade
            e culto, dando luz ao caminho que seu coração escolher trilhar.
            Admira muito uma divindade do meio nórdico, está sentindo seu
            chamado, mas ainda não tem certeza de como começar, como se conectar
            e desenvolver suas conexões e ensinamentos? Aqui eu te auxilio passo
            a passo nesse caminho, trazendo luz e guiança aos seus processos,
            esclarecendo suas dúvidas e auxiliando no início de sua jornada de
            conexão.
          </Typography>
          <Typography>
            <b>Uthark </b> Tiragem rúnica focada no método oracular do Utark,
            visando o autodesenvolvimento, através da identificação e análise
            dos bloqueios, medos e sombras que ainda te impedem de alcançar sua
            melhor versão. Você sente seus caminhos travados? Sente que algo te
            impede de alcançar seus sonhos e objetivos mesmo desejando e fazendo
            tudo certo? Então essa tiragem é para você! Runologia do nome- Você
            sabia que cada letra do seu nome pode revelar traços de
            personalidade, talentos e até mesmo desafios em sua vida? Com a
            runologia, você pode desvendar esses mistérios e aprender mais sobre
            si mesmo e sobre as energias que carrega. Quer descobrir mais sobre
            a ferramenta de poder que recebeu em seu nascimento e dos potenciais
            escondidos que possui? Então esse é o lugar certo para você!{" "}
          </Typography>
        </PageContainer>
      </Stack>
    </PageWrapper>
  );
};

export default ServicesPage;
