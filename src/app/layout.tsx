import { ThemeProvider } from "~/theme/provider";
import { RootContainer } from "~/page/RootContainer";

export const metadata = {
  title: "Templo de Loki",
  description: "Templo de Loki",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <RootContainer>
        <body>{children}</body>
      </RootContainer>
    </ThemeProvider>
  );
}
