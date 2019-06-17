module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  globals: {
    window: true,
    document: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js']
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0
  }
};
