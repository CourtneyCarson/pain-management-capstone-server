module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://courtneycarson@localhost/trigger_point',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://courtneycarson@localhost/trigger_point-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
}