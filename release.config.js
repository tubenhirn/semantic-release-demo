module.exports = {
  branches: ["main", {name: "hotfix/*" prerelease: true}],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
  ],
};
