const request = require('supertest');
const app = require('../app')

let actorId;

test('GET /actors should return code 200', async () => {
    const res = await request(app).get('/actors')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('POST /actors should return code 201', async () => {

    const actors = 
        {
            firstName: "TestDos",
            lastName: "Cage2",
            nationality: "Americann",
            image: "nosee",
            birthday: "1941-04-25"
        }     

    const res = await request(app).post('/actors').send(actors)
    actorId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body.firstName).toBe(actors.firstName)
})

test('PUT /actors/:id should return 200', async () => {
    const uploaded = 
    {
        firstName: "TestDoss",
    } 
    
    const res = await request(app).put(`/actors/${actorId}`).send(uploaded)

    expect(res.statusCode).toBe(200)
    expect(res.body.firstName).toBe(uploaded.firstName)
})

test('DELETE /actors/:id should return 204', async () => {
    const res = await request(app).delete(`/actors/${actorId}`)
    expect(res.statusCode).toBe(204)
})