const fs = require('fs')

module.exports = function getFileContents (filePath) {
  try {
    if (!fs.existsSync(filePath)) return null
    return fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    console.error(err)
	return null
  }
}
