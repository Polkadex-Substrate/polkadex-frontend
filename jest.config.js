module.exports = {
  testEnviromenet: "jsdom",
  testPathIgnorePatterns: ['/node_modules', './next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  assetPrefix: '/polkadex-frontend/',
  basePath: '/polkadex-frontend',
}
