const request = require('supertest');
const app = require('../app')
require('../models')

let directorId;

test('GET /directors should return code 200', async () => {
    const res = await request(app).get('/directors')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('POST /directors should return code 201', async () => {

    const directors = 
        {
            firstName: "test",
            lastName: "tres",
            nationality: "nose",
            image: "nosee",
            birthday: "1941-04-25"
        }     

    const res = await request(app).post('/directors').send(directors)

    directorId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body.firstName).toBe(directors.firstName)
})

test('/PUT /directors/:id should return code 200', async () => {
    const directors = 
        {
            lastName: "cuatro"
        }
    
        const res = await request(app).put(`/directors/${directorId}`).send(directors)

        expect(res.statusCode).toBe(200)
        expect(res.body.lastName).toBe(directors.lastName)
})

test('/DELETE /director/:id should return code 204', async () => {
    const res = await request(app).delete(`/directors/${directorId}`)
    expect(res.statusCode).toBe(204)
})
