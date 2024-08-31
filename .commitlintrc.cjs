/** @type {import("cz-git").UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    alias: {
      b: 'chore: :hammer: bump dependencies',
    },
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
    enableMultipleScopes: true,
    maxSubjectLength: 100,
    scopeEnumSeparator: ',',
    skipQuestions: ['scope', 'footer'],
    useEmoji: true,
  },
  rules: {
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 2],
  },
};
