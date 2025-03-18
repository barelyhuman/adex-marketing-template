/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary()
      table.string('email').unique()
      table.string('password').notNullable()

      table.boolean('is_active').notNullable().defaultTo(false)
      table.boolean('is_verified').notNullable().defaultTo(false)

      table.timestamps(true, true)
    })
    .createTable('tokens', function (table) {
      table.increments('id').primary()

      table.string('token').unique()
      table.string('hash')

      table.boolean('is_active').notNullable().defaultTo(false)
      table.integer('user_id').references('id').inTable('users')

      table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTableIfExists('tokens').dropTableIfExists('users')
}
