const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env. || 'mysql://root:rootroot@localhost:3306/movies_db')