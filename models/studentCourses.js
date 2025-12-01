
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const studentCourse = sequelize.define(
  'studentcourse',            
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
  }
);

module.exports = studentCourse;
