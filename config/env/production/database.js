module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-98.railway.app'),
      port: env.int('PGPORT', 7846),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '9zhDiEUxzCiesFJTu1ts'),
      ssl: env.bool(true),
    },
  },
});