/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import useTheme, { ThemeProvider } from '@hooks/useTheme';
import { RootStack } from '@navigation';
import { ProductCategoriesProvider, SimpleProvider, LocalRealmProvider } from '@providers';

const queryClient = new QueryClient();

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider value={theme}>
      <LocalRealmProvider>
        <QueryClientProvider client={queryClient}>
          <ProductCategoriesProvider.Provider>
            <SimpleProvider.Provider>
              <RootStack />
            </SimpleProvider.Provider>
          </ProductCategoriesProvider.Provider>
        </QueryClientProvider>
      </LocalRealmProvider>
    </ThemeProvider>
  );
};

export default App;
