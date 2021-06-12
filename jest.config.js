/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src/app',
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.build.json',
    },
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../../reports/coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
