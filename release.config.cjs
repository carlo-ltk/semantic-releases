/* eslint-disable no-template-curly-in-string */
module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        "semantic-release-github-pullrequest", {
          "assets": ["CHANGELOG.md"],
          "baseRef": "main"
        }
      ],
      '@semantic-release/github',
    ],
  }