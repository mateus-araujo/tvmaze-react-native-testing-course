module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.ts'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './test/setup-env.js',
  ],
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', './test'],
};
