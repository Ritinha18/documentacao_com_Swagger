const path = require("path")

module.exports = {
  development: {
    cliente: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'biblioteca_knex'
    },
    migrations:{
      directory: path.resolve(
        __dirname,
        'src',
        'database',
        'knex',
        'migrations'
      )
    },
    useNullAsDefault: true,
  },
}