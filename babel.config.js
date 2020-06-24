module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './app/components',
          navigation: './app/navigation',
          screens: './app/screens',
          utils: './app/utils',
          assets: './app/assets',
          store: './app/store',
        },
      },
    ],
  ],
};
