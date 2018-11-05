'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('example', [
            {
                uuid: 'fe7d0c34-6819-4026-91f2-89f3714da773',
                name: 'First example'
            },
            {
                uuid: '55bae32e-fc8a-432d-8f34-15b0e30666a7',
                name: 'Second example'
            },
            {
                uuid: '2e04f384-bae3-4c69-b541-c87d646c61ab',
                name: 'Third example'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('example', null, {});
    }
};
