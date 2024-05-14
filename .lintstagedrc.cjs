module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'pnpm typecheck',
  // Lint and Format files
  '**/*.(ts|tsx|js|jsx)': (files) => [
    `pnpm eslint ${files.join(' ')}`,
    `pnpm prettier -uc ${files.join(' ')}`,
  ],
};
