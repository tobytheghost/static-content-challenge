const getFilePath = require("./get-file-path")

describe('get-file-path', () => {
  it('should return the correct path', () => {
	const path = '/test'
	const expected = 'content/test/index.md'
	const actual = getFilePath(path)
	expect(actual).toEqual(expected)
  })
})