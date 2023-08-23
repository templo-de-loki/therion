import Head from "next/head";
import { AppProps } from "next/app";
import { RootContainer } from "@/components/containers";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContainer>
      <Head>
        <title>Templo de Loki</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </RootContainer>
  );
};

export default App;
