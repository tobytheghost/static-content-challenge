const getPageContents = require('./get-page-contents')

describe('get-page-contents', () => {
  it('should return the correct content', () => {
    const filePath = 'test-content/test/index.md'
    const actual = getPageContents(filePath)
    expect(actual).toContain('Test Title')
  })
})