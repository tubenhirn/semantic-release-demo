module.exports = {
  branches: ["main", { name: "hotfix/*", prerelease: `hotfix-\${name}` }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
