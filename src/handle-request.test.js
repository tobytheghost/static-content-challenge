const handleRequest = require('./handle-request')

describe('handleRequest', () => {
  it('should return 200 when the request is for a valid file', () => {
    const req = {
      url: '/test',
      basePath: 'test-content'
    }
    const res = {
      status: jest.fn(() => res),
      send: jest.fn()
    }
    const next = jest.fn()
    handleRequest(req, res, next)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should return 404 when the request is for an invalid file', () => {
    const req = {
      url: '/invalid',
      basePath: 'test-content'
    }
    const res = {
      status: jest.fn(() => res),
      send: jest.fn()
    }
    const next = jest.fn()
    handleRequest(req, res, next)
    expect(res.status).toHaveBeenCalledWith(404)
  })

  it('should return a body that contains the HTML generated from the file', () => {
    const req = {
      url: '/test',
      basePath: 'test-content'
    }
    const res = {
      status: jest.fn(() => res),
      send: jest.fn()
    }
    const next = jest.fn()
    handleRequest(req, res, next)
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining('!doctype html') &&
        expect.stringContaining('Test Title')
    )
  })
})
