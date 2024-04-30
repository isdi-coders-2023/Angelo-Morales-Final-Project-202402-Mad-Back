const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'index.ts',
    'entities',
    'interface',
    'tools',
    'type',
    '_mock',
  ],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
};
export default config;
