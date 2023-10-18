module.exports = {
  branches: ["main", { name: "hotfix/*", prerelease: "fart", channel: `channel-\${name}` }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
