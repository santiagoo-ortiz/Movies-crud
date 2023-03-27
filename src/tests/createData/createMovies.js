const Movie = require("../../models/Movie");

const createMovies = async () => {
    const movies = [
        {
            name:"test uno",
            image: "nose",
            synopsis: "noseee",
            releaseYear: "2002"
        },
        {
            name:"test dos",
            image: "nose",
            synopsis: "noseee",
            releaseYear: "2002"
        }

    ]
    await Movie.bulkCreate(movies)
}

module.exports = createMovies


