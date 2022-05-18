/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.increments('id').primary();
        table.text("user_name").notNullable();
        table.text("user_email").notNullable().unique();
        table.string("user_password").notNullable().unique(); // varchar(?)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users")
};

// we're using knex but in the tutorial, they arent
// we need to figure out why the "select * from users" isn't showing the fake users
// maybe we can not use knex instead and do it how they are doing so in the tutorial
// or look up how to insert fake users into postgres using knex 