const request = require('supertest');
const app = require('../app')
require('../models')

let genreId;

test('GET /genres should return code 200', async () => {
    const res = await request(app).get('/genres')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('POST /genres should return code 201', async () => {
    const body =  
        {
            name:"testtres"
        }

    const res = await request(app).post('/genres').send(body)

    genreId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe(body.name)
})

test('PUT /genres/:id should return code 200', async () => {
    const body =  
        {
            name:"testcuatro"
        }
    
    const res = await request(app).put(`/genres/${genreId}`).send(body)

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(body.name)

})

test('DELETE /genres/:id should return code 204', async () => {
    const res = await request(app).delete(`/genres/${genreId}`)
    expect(res.statusCode).toBe(204)
})

