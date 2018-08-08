const request = require('supertest')
const app = require('../index')

const welcomeMessage = 'Welcome to the Intelygenz talent test!'
const username = 'Ana'
const usernameJson = {
  'username': 'Ana'
}

describe('Welcome endpoint validation', () => {
  test('Validate welcome message', async () => {
    const response = await request(app).get('/welcome')
    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual(welcomeMessage)
  })
  test('Validate username propagation', async () => {
    const response = await request(app).get('/welcome/' + username)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(usernameJson)
  })
})
