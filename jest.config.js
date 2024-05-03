const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'index.ts',
    'entities',
    'type.repo.ts',
    'interface',
    'tools',
    '_mock',
  ],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
};
export default config;
