module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define('movie', {
        title: {
            type: Sequelize.STRING,
        },
        genre: {
            type: Sequelize.STRING,
        },
        director: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        rating: {
            type: Sequelize.INTEGER,
        },
    });
    return Movie;
}
