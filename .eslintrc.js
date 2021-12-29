module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.android.tsx', '.ios.tsx', '.js', '.jsx'],
      },
      node: {
        extensions: ['.ts', '.tsx', '.android.tsx', '.ios.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'src/'],
        paths: ['src'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-native/no-inline-styles': 'off',
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint', 'prettier', 'import'],
};
