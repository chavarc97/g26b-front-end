module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect" // O puedes especificar la versión de react que estas utilizando, por ejem. "18.8"
    }
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'eslint-config-prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
