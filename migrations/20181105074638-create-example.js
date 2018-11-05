'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('example', {
            uuid: {
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                type: Sequelize.UUID
            },
            name: {
                allowNull: false,
                length: 32,
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('example');
    }
};