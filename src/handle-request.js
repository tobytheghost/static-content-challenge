const getFilePath = require('./get-file-path')
const getPageContents = require('./get-page-contents')

module.exports = function handleRequest (req, res) {
  const filePath = getFilePath(req.url, req.basePath)
  const pageContent = getPageContents(filePath)
  if (!pageContent) return res.status(404).send()
  return res.status(200).send(pageContent)
}
