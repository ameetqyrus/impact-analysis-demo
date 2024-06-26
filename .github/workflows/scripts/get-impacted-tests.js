const path = require('path');

const testMapping = {
  'src/components/Header.js': ['src/__tests__/Header.test.js'],
  'src/components/Counter.js': ['src/__tests__/Counter.test.js'],
  'src/components/Footer.js': ['src/__tests__/Footer.test.js'],
};

const changedFiles = process.argv[2].split(' ');

const impactedTests = new Set();

changedFiles.forEach(file => {
  const normalizedPath = path.normalize(file);
  Object.entries(testMapping).forEach(([component, tests]) => {
    if (normalizedPath.includes(component)) {
      tests.forEach(test => impactedTests.add(test));
    }
  });
});

console.log(Array.from(impactedTests).join(' '));