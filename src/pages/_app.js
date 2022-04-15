import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import AppContextProvider from '../@crema/utility/AppContextProvider';
import {Provider} from 'react-redux';
import AppThemeProvider from '../@crema/utility/AppThemeProvider';
import AppStyleProvider from '../@crema/utility/AppStyleProvider';
import AppLocaleProvider from '../@crema/utility/AppLocaleProvider';
import FirebaseAuthProvider from '../@crema/services/auth/firebase/FirebaseAuthProvider';
import AuthRoutes from '../@crema/utility/AuthRoutes';
import {useStore} from '../redux/store'; // Client-side cache, shared for the whole session of the user in the browser.
import '../@crema/services/index';
import '../shared/vendors/index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import {createHttpLink} from '@apollo/client';
import {MultiAPILink} from '@habx/apollo-multi-endpoint-link';
import resellers from '../content/resellers.json';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const store = useStore(pageProps.initialReduxState);

  // const client = new ApolloClient({
  //   link: ApolloLink.from([
  //     new MultiAPILink({
  //       endpoints: resellers,
  //       createHttpLink: () => createHttpLink(),
  //     }),
  //   ]),
  //   cache: new InMemoryCache(),
  // });

  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <AppContextProvider>
          <Provider store={store}>
            <AppThemeProvider>
              <AppStyleProvider>
                <AppLocaleProvider>
                  <FirebaseAuthProvider>
                    <AuthRoutes>
                      <CssBaseline />
                      <Component {...pageProps} />
                    </AuthRoutes>
                  </FirebaseAuthProvider>
                </AppLocaleProvider>
              </AppStyleProvider>
            </AppThemeProvider>
          </Provider>
        </AppContextProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
