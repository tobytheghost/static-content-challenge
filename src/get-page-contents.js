const marked = require('marked')
const getFileContents = require('./get-file-contents')

const TEMPLATE_PATH = 'public/template.html'

module.exports = function getPageContents (filePath) {
  const mdData = getFileContents(filePath)
  const template = getFileContents(TEMPLATE_PATH)
  const htmlData = mdData && marked.parse(mdData)
  if (!template || !htmlData) return null
  return template.replace('{{content}}', htmlData)
}
