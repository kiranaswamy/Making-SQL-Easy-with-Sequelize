const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Student = sequelize.define(
  'student',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  
);


console.log(Student === sequelize.models.Student);