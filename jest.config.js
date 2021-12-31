module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  setupFiles: [
    './test/setup-jest.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/*/src/**/*.{js,vue}',
    '!packages/admin-lte/**',
    '!packages/theme/**',
    '!packages/vnode/**'
  ]
}
