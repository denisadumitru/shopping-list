module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@config': './src/config',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@mocks': './src/mocks',
          '@navigation': './src/navigation',
          '@providers': './src/providers',
          '@schemas': './src/schemas',
          '@screens': './src/screens',
          '@services': './src/services',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
