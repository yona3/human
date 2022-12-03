import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

import { useColorScheme } from "@/hooks/ui/useColorScheme";

export const App = ({ Component, pageProps }: AppProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <RecoilRoot>
      <Head>
        <title>human</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
};
