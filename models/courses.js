
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Course = sequelize.define(
  'course',            
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING,allowNull:false },
  }
);

module.exports = Course;
