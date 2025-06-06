const request = require('supertest');
const app = require('../app');

describe('Unit Test: GET /', () => {
  it('powinno zwrócić 200 i object z pola message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Test message');
  }, 10000);
});

describe('Unit Test: add and subtract functions', () => {
  it('add(2, 3) powinno zwrócić 5', () => {
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(-1, 1)).toBe(0);
    expect(app.add(0, 0)).toBe(0);
  });

  it('subtract(5, 3) powinno zwrócić 2', () => {
    expect(app.subtract(5, 3)).toBe(2);
    expect(app.subtract(3, 5)).toBe(-2);
    expect(app.subtract(0, 0)).toBe(0);
  });
});
