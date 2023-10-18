module.exports = {
  "branches": ['+([0-9])?(.{+([0-9]),x}).x', "main", "release", {name: "hotfix/*", prerelease: "hotfix", channel: "hotfix"}],
  "plugins": ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/github']
};
