const { BelongsToMany } = require("sequelize")
const Movie = require("./Movie");
const Actor = require("./Actor");
const Genre = require("./Genre");
const Director = require("./Director")

Movie.belongsToMany(Actor, {through: "MoviesActor"});
Actor.belongsToMany(Movie, {through: "MoviesActor"});

Movie.belongsToMany(Genre, {through: "MoviesGenre"});
Genre.belongsToMany(Movie, {through: "MoviesGenre"});

Movie.belongsToMany(Director, {through: "MoviesDirector"});
Director.belongsToMany(Movie, {through: "MoviesDirector"});





