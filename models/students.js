// models/students.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Student = sequelize.define(
  'student',            
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false }
  },
  { freezeTableName: true } 
);

module.exports = Student;
