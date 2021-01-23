'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Pokemons', [
      {
        name: 'Charmander',
        lvl: 5,
        trainerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ghastly',
        lvl: 8,
        trainerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ditto',
        lvl: 25,
        trainerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pokemons', null, {});
  },
};
