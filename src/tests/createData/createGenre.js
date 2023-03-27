const Genre = require("../../models/Genre");

const createGenre = async () => {
    const genres = [
        {
            name:"testuno"
        },
        {
            name:"testdos"
        }
    ]
    await Genre.bulkCreate(genres)
}

module.exports = createGenre