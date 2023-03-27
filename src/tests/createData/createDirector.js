const Director = require("../../models/Director");

const createDirectors = async () => {
    const directors = [
        {
            firstName: "Test",
            lastName: "uno",
            nationality: "nosee",
            image: "nose",
            birthday: "1940-04-25"
        },
        {
            firstName: "Test",
            lastName: "dos",
            nationality: "nose",
            image: "nose",
            birthday: "1940-04-25"
        }
    ]
    await Director.bulkCreate(directors)
}

module.exports = createDirectors