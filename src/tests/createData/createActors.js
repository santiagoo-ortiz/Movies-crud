const Actor = require("../../models/Actor")

const createActors = async () => {
    const actors = [
        {
            firstName: "Test",
            lastName: "Cage",
            nationality: "American",
            image: "nose",
            birthday: "1940-04-25"
        },
        {
            firstName: "To",
            lastName: "Delete",
            nationality: "nose",
            image: "nose",
            birthday: "1940-04-25"
        }
    ]
    await Actor.bulkCreate(actors)
}

module.exports = createActors