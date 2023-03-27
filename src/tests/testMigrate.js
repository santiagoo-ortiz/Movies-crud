const sequelize = require('../utils/connection');
const createActors = require('./createData/createActors');
const createDirectors = require('./createData/createDirector');
const createGenre = require('./createData/createGenre');
const createMovies = require('./createData/createMovies');
require('../models/Actor')
require('../models/Director')
require('../models/Genre')
require('../models/Movie')


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        await createActors()
        await createGenre()
        await createDirectors()
        await createMovies()

        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();