module.exports = function getFilePath (path, basePath) {
  return `${basePath || 'content'}${path}/index.md`
}
