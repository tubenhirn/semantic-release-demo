module.exports = {
  branches: [
    { name: "main", channel: "latest" },
    { name: "hotfix/*"},
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
  ],
};
