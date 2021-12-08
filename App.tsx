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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import useTheme, { ThemeProvider } from '@hooks/useTheme';
import { RootStack } from '@navigation';
import { SimpleProvider } from '@components/providers';

const queryClient = new QueryClient();

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider value={theme}>
      <QueryClientProvider client={queryClient}>
        <SimpleProvider.Provider>
          <RootStack />
        </SimpleProvider.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
