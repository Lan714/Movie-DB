const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class Movie extends Model { }

Movie.init({
  title: DataTypes.STRING,
  isWatched: DataTypes.BOOLEAN
}, {sequelize, modelName:'movie'}
)

module.exports = Movie