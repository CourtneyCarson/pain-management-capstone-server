module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_ENV: process.env.DB_URL || 'postgresql://courtneycarson@localhost/trigger_point',
}