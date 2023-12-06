'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'subscription_types',
			[
				{
					name: 'Guest',
					price: null,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Standard',
					price: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vip 1',
					price: 200,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vip 2',
					price: 300,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('subscription_types', null, {});
	},
};
