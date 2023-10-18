module.exports = {
  branches: ["main", "hotfix"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
  ],
};
