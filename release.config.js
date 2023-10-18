module.exports = {
  branches: [
    { name: "main", channel: "latest" },
    { name: "hotfix/*", prerelease: '${name.replace(/^hotfix\\//g, "")}'},
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
  ],
};
