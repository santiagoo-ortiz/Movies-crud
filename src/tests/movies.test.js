const request = require('supertest');
const app = require('../app')
require('../models')

let movieId;

test('/GET should return code 200', async () => {
    const res = await request(app).get('/movies')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('POST should return code 201', async () => {
    const movie = 
        {
            name:"test tres",
            image: "nose",
            synopsis: "noseee",
            releaseYear: "2002"
        }
    

    const res = await request(app).post('/movies').send(movie)

    movieId = res.body.id    

    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe(movie.name)
})

test('PUT /movies/:id should return code 200', async () => {

    const movie = 
        {
            name:"test cuatro"
        }

    const res = await request(app).put(`/movies/${movieId}`).send(movie)

        expect(res.statusCode).toBe(200)
        expect(res.body.name).toBe(movie.name)
})

test('POST actors should return code 200', async () => {
    const movie = [1,2]
    

    const res = await request(app).post(`/movies/${movieId}/actors`).send(movie)
 

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('POST directors should return code 200', async () => {
    const movie = [1]
    

    const res = await request(app).post(`/movies/${movieId}/directors`).send(movie)


    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(1)
})

test('POST genres should return code 201', async () => {
    const movie = [1,2]
    

    const res = await request(app).post(`/movies/${movieId}/genres`).send(movie) 

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('DELETE /movies/:id should return code 204', async () => {

    const res =await request(app).delete(`/movies/${movieId}`)
    expect(res.statusCode).toBe(204)
})

