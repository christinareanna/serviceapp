// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// development: {
//   client: 'sqlite3',
//   connection: {
//     filename: './dev.sqlite3'
//   }
module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///mybackend"
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
