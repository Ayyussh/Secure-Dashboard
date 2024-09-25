module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript files
    testEnvironment: 'jsdom', // Simulate a browser environment
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Handle TypeScript files
      '^.+\\.(js|jsx)$': 'babel-jest', // Handle JavaScript files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', // Allow transformation of axios or other ES modules
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Add custom matchers for DOM
  };
  