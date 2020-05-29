// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'rancharias_add1',
      password: '12345678',
      database: 'ranchariasolid'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    isNullAsDefault: true
  }

};