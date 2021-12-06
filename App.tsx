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

import useTheme, { ThemeProvider } from '@hooks/useTheme';
import { RootStack } from '@navigation';

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider value={theme}>
      <RootStack />
    </ThemeProvider>
  );
};

export default App;
