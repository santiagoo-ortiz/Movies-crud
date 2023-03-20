const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movies = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.STRING,
        allowNull: false
    } 
});

module.exports = Movies;