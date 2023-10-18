module.exports = {
  branches: ["main", { name: "hotfix/*", prerelease: "hotfix" }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
