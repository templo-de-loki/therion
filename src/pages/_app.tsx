import Head from "next/head";
import { ThemeProvider } from "~/theme/provider";
import { type AppType } from "next/dist/shared/lib/utils";
import { RootContainer } from "~/containers/RootContainer";

const MyApp: AppType = ({ Component, pageProps }) => {
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

export default MyApp;
