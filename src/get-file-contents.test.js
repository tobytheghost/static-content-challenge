const getFileContents = require('./get-file-contents')

describe('getFileContents', () => {
  it('should return the correct content', () => {
    const filePath = 'test-content/test/index.md'
    const actual = getFileContents(filePath)
    expect(actual).toContain('# Test Title')
  })
})
