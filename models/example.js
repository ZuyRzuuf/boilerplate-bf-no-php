'use strict';
module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('example', {
      uuid: {
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID
      },
      name: {
          allowNull: false,
          length: 32,
          type: DataTypes.STRING
      }
  }, {});
  Example.associate = function(models) {
    // associations can be defined here
  };
  return Example;
};