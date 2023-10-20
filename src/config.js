module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://tttymgna:jo-2d6oLFX7O_ArhPa6CcXNXzFK3chrH@suleiman.db.elephantsql.com/tttymgna',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgres://tttymgna:jo-2d6oLFX7O_ArhPa6CcXNXzFK3chrH@suleiman.db.elephantsql.com/tttymgna-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
}