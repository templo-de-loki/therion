import Head from "next/head";
import { AppProps } from "next/app";
import { RootContainer } from "@/containers";
import { ThemeProvider } from "@/theme/provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <RootContainer>
        <Head>
          <title>Templo de Loki</title>
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Component {...pageProps} />
      </RootContainer>
    </ThemeProvider>
  );
};

export default App;
