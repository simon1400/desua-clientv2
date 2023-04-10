import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { FC } from 'react';
import { Open_Sans } from "next/font/google";
import { wrapper } from 'stores';
import createEmotionCache from 'lib/createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { WithGraphQL } from 'lib/api';
import theme from 'styles/theme';
import "styles/global.scss"
import { globalVariables } from 'styles/var';
import { Provider } from 'react-redux';
import Header from "layout/Header";
import InfoLine from "layout/InfoLine";
import CategoryNav from "layout/CategoryNav";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <div className={openSans.className}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={{ ...theme, ...globalVariables }}>
            <CssBaseline />
            <WithGraphQL>
              <InfoLine />
              <Header />
              <CategoryNav />
              <Component {...pageProps} />
              {/* <Footer /> */}
            </WithGraphQL>
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
